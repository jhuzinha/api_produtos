import { axiosRequest } from "../config/API_Request.js";

export async function getDateBuy(req, res) {
    const data = await axiosRequest();
    const filter =  data.pedidos.map((item) => item.DataCompra )
    res.send(filter).status(200)
}

export async function getStatus(req, res) {
    const data = await axiosRequest();
    const filter = data.pedidos[0]["Status"]
    
    res.send(filter).status(200)
}

export async function getNotCancel(req, res) {
    const data = await axiosRequest();
    const filter =  data.pedidos.filter((item) => item.Status != "Cancelado" )
    const pedido = filter.map((item) => item.NumeroPedido)
    res.send(pedido).status(200)
}

export async function getPricePosted(req, res) {
    const data = await axiosRequest();
    const filter =  data.pedidos.filter((item) => item.Status == "Postado")
    const price = filter.map((item) => item.preco)
    res.send(price).status(200)
}