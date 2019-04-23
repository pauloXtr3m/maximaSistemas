const url = 'https://mxmapedidodevenda.s3.amazonaws.com/prova_android/pedidos.json';

const headers = {
	method: 'GET',
};

export const getOrders = () => fetch(url, {headers})
	.then(res => res.json()).then(data => data.pedidos);