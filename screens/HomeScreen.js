import React from 'react';

import {WebBrowser} from 'expo';
import {MonoText} from '../components/StyledText';
import {AppHeader} from "../components/AppHeader";
import {Container, Content, Card, CardItem, Header, Body, Icon, Grid, Col, Row} from 'native-base';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from "../constants/Colors";
import {MenuCard} from "../components/MenuCard";
import {
    MENU_CLIENTES,
    MENU_CLIENTES_IMAGE, MENU_FERRAMENTAS, MENU_FERRAMENTAS_IMAGE,
    MENU_PEDIDOS,
    MENU_PEDIDOS_IMAGE,
    MENU_RESUMO_VENDAS, MENU_RESUMO_VENDAS_IMAGE
} from "../constants/Menu";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <AppHeader title='maxApp'/>,
        headerTintColor: Colors.headerTintColor,
        headerStyle: {
            backgroundColor: Colors.headerTintColor,
        }
    };

    goToCustomerDetail = () => {
        this.props.navigation.navigate(
            'CustomerDetail',)
    };

    render() {
        return (
            <Container style={styles.homeContainer}>
                <Grid>
                    <Row>
                        <MenuCard menuText={MENU_CLIENTES} imageSourcePath={MENU_CLIENTES_IMAGE} onPressAction={this.goToCustomerDetail}/>
                        <MenuCard menuText={MENU_PEDIDOS} imageSourcePath={MENU_PEDIDOS_IMAGE}/>
                    </Row>
                    <Row>
                        <MenuCard menuText={MENU_RESUMO_VENDAS} imageSourcePath={MENU_RESUMO_VENDAS_IMAGE}/>
                        <MenuCard menuText={MENU_FERRAMENTAS} imageSourcePath={MENU_FERRAMENTAS_IMAGE}/>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: Colors.backgroundColor,
    }
});
