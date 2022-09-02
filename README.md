# API PRODUTOS

### URL = https://api-produtos-jhuliana.herokuapp.com/

Utilizando uma api externa nos endpoints abaixo pode-se filtrar os resultados:

**/data-compra** - Retorna a Data de Compra de todos os pedidos. </br>
**/status-primeiro** - Retorna o Status do 1º pedido da lista.</br>
**/not-cancel** - Lista o Número do Pedido dos pedidos com status diferente de Cancelado. </br>
**/price-posted** - Lista o preço dos pedidos postados </br>

O mesmo resultados dado pelos JsonPath a seguir: </br>
$..DataCompra </br>
$.[0].Status </br>
$.pedidos[?(@.Status != "Cancelado")].NumeroPedido </br>
$.pedidos[?(@.Status == "Postado")].preco </br>


