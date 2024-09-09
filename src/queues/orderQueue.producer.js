let channel;

export const defineChannel = (chan) => {
    channel = chan;
}

export const produce = async (order) => {
    channel.sendToQueue('order.queue', Buffer.from(JSON.stringify(order)), {persistent: true})
}

export default {
    defineChannel,
    produce
}