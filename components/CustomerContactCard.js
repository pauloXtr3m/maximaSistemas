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


export const CustomerContactCard = ({contacts}) => {
	
	return (
		<Card>
			<CardItem header bordered>
				<TextTitle>Contatos</TextTitle>
			</CardItem>
			{contacts.map(contact => (
				<CardItem key={contact.nome} bordered>
					<Body>
					<CustomerName>{contact.nome}</CustomerName>
					<Grid>
						{Field.getCustomField('Telefone: ', contact.telefone)}
						{Field.getCustomField('Email: ', contact.e_mail)}
						{Field.getCustomField('Celular: ', contact.celular)}
						{Field.getCustomField('Data de nascimento: ', contact.data_nascimento)}
						{Field.getCustomField('Conjuge: ', contact.conjuge)}
						{Field.getCustomField('Data de nascimento conjuge: ', contact.dataNascimentoConjuge)}
						{Field.getCustomField('Tipo: ', contact.tipo)}
					</Grid>
					</Body>
				</CardItem>
			))}

		</Card>
	);
};