import axios from "axios";

export async function axiosRequest() {
    const { data } = await axios.get(`${process.env.BASE_URL}`)
    return data ;
};