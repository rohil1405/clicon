import RequestProps from "@/models/RequestProps"

const Request = async({url, configuration}: RequestProps) => {
    try{
        const res = await fetch(url, configuration);
        const data = await res.json();
        if(!res.ok) {
            throw new Error(`${data.message}`)
        } else {
            return {
                statusCode: res.status,
                data
            }
        }
    } catch(error) {
        throw new Error(`${error}`)
    }
}

export default Request;