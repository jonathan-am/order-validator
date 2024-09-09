import Joi from 'joi';

export const validateSchemaCreateOrder = Joi.object().keys({
        payment: Joi.object({
            type: Joi.string().trim(false).required(),
            identifier: Joi.string().trim(false).required(),
            status: Joi.string().required()
        }).required(),
        item: Joi.object({
            name: Joi.string().trim().required(),
            quantity: Joi.number().integer().required(),
            unitPrice: Joi.number().required(),
        }).required(),
        value: Joi.number().required(),
        billing: Joi.object({
            name: Joi.string().trim(false).required(),
            lastname: Joi.string().trim(false).required(),
            address: Joi.string().trim().required()
        }).required()
})

export default {
    validateSchemaCreateOrder,
}