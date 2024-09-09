import amqp from "amqplib";
import logger from "~/config/logger";
import { defineChannel } from "~/queues/orderQueue.producer";

export const initProducer = async () => {
    logger.warn('Iniciando conexao com a fila - order.queue')
    try {
        const connection = await amqp.connect("amqp://guest:guest@localhost:5672");
        const channel = await connection.createChannel();
        await channel.assertQueue('order.queue', { 
            durable: true,
            deadLetterExchange: 'order.exchange.dlq',  
            deadLetterRoutingKey: 'orderDlqRouteKey',
         })
        defineChannel(channel);
        logger.info('Conexao aberta com a fila - order.queue')
    }catch(error) {
        logger.error('startQueue - Erro ao conectar a fila | message:',error)
        process.kill(process.pid)
    }
}

export default {
    initProducer
}