import httpStatus from "http-status";
import GenericException from "~/middlewares/handler/Exceptions/GenericException";
import { produce } from "~/queues/orderQueue.producer";
import { validateSchemaCreateOrder } from "~/validators/data.validation"

export const validateAndProcessOrder = async (data) => {
    await validateSchemaCreateOrder.validateAsync(data);
    if(hasValidPrice(data.value, data.item.unitPrice, data.item.quantity)) {
        const result = fraudCheck(data);
        data.fraudCheck = result;
        data.status = "initial";

        await produce(data);
        return;
    }
    throw new GenericException(httpStatus.BAD_REQUEST, 'Invalid order request.')
}

const hasValidPrice = (total, unitPrice, quantity) =>  {
    return total === (unitPrice * quantity);
}

const fraudCheck = (data) => {
    //valida o nome e o lastname no db
    //valida o email no db
    //outras validacoes
    return (data.billing.name === "teste" || data.billing.lastname === "teste");
}

export default {
    validateAndProcessOrder
}