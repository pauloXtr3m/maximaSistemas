import React from "react";
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import {Card, CardItem, Content, Header, Body} from "native-base";
import {Image, StyleSheet} from "react-native";

export const MenuCard = ({imageSourcePath, menuText, onPressAction}) => {

	const MenuIcon = styled.Image`
	      width: 100px;
	      height: 100px;
	      background: #fff;
	      backgroundColor: #fff;
          `;

	const MenuText = styled.Text`
          height: 40px;`;

		return (
			<Card style={styles.card}>
				<CardItem button onPress={onPressAction}>
						<MenuIcon source={imageSourcePath} />
				</CardItem>
				<CardItem button onPress={onPressAction}>
					<Body>
						<MenuText>{menuText}</MenuText>
					</Body>
				</CardItem>
			</Card>
		);
};

const styles = StyleSheet.create({
	card: {
		height: 160,
		width: 160,
		backgroundColor: '#fff',
		marginTop: 16,
		marginBottom: 16,
		marginLeft: 16,
		marginRight: 16,
	},
});