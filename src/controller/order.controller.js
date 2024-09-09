import httpStatus from "http-status";
import logger from "~/config/logger";
import { validateAndProcessOrder } from "~/services/order.service"

export const receiveOrder = async (req, res) => {
    try {
        await validateAndProcessOrder(req.body);
        res.status(httpStatus.CREATED).json({ success: true })
    }catch(error) {
        logger.error('OrderController.receiveOrder - Erro ao processar o pedido | message:', error)
        throw error;
    }
}


export default {
    receiveOrder
}