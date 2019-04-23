import React from "react";
import styled from 'styled-components/native';
import {Card, CardItem, Body} from "native-base";
import { StyleSheet} from "react-native";

export const MenuCard = ({imageSourcePath, menuText, onPressAction}) => {

	const MenuIcon = styled.Image`
	      flex: 1;
	      width: 100;
	      height: 100;
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
		marginTop: 40,
	},
});