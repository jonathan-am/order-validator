import axios from "axios"
import ClientRequestException from "~/middlewares/handler/Exceptions/ClientRequestException";

export const postPayment = async (data) => {
    const options = {
        url: 'http://localhost:4001/payment', 
        method: 'POST',
        data,
        headers: { 
            "Content-Type": 'application/json'
        }
    }
    return await axios(options)
        .then((response))
        .catch(error=>{throw new ClientRequestException(500, error.message)});
}

export default {
    postPayment
}