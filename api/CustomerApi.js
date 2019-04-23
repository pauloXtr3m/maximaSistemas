const url = 'https://mxmapedidodevenda.s3.amazonaws.com/prova_android/clientes.json';

const headers = {
	method: 'GET',
};

export const getCustomer = () => fetch(url, {headers})
	.then(res => res.json())
	.then(data => data.cliente);