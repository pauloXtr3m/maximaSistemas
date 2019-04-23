import React from "react";
import styled from 'styled-components/native';
import Colors from '../constants/Colors';

const AppTitle = styled.Text`
	font-size: 18;
	margin-left: 12;
	color: ${Colors.titleTextColor};
`;

export const AppHeader = ({title}) => {
	return (
		<AppTitle>{ title }</AppTitle>
	);
};