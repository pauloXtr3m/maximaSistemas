import {Row} from "native-base";
import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const CustomerTextField = styled.Text`
	color: gray;
`;

export const getCustomField = (title, value) =>
	value ? (
			<Row>
				<CustomerTextField>{title}</CustomerTextField>
				<Text>{value}</Text>
			</Row>)
		: (<Text />)
;