import React from 'react';
import {Card, CardItem, Body, Grid} from "native-base";
import styled from 'styled-components/native';
import * as Field from './fields';


const TextTitle = styled.Text`
	font-size: 18;
`;

const CustomerName = styled.Text`
	font-size: 16;
`;

export const CustomerDataCard = ({customer}) => {

	return (
		<Card>
			<CardItem header bordered>
				<TextTitle>Dados do cliente</TextTitle>
			</CardItem>
			<CardItem bordered>
				<Body>
				<CustomerName>{`${customer.codigo} - ${customer.nomeFantasia}`}</CustomerName>
				<Grid>
					{Field.getCustomField('CNPJ: ', customer.cnpj)}
					{Field.getCustomField('Ramo de atividade: ', customer.ramo_atividade)}
					{Field.getCustomField('Endereço: ', customer.endereco)}
				</Grid>
				</Body>
			</CardItem>
		</Card>
	);
};