import React from 'react';

import {AppHeader} from "../components/AppHeader";
import {Content, Grid, Col} from 'native-base';

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
            <Content padder>
                <Grid >
                    <Col>
                        <MenuCard menuText={MENU_CLIENTES} imageSourcePath={MENU_CLIENTES_IMAGE} onPressAction={this.goToCustomerDetail}/>
						<MenuCard menuText={MENU_RESUMO_VENDAS} imageSourcePath={MENU_RESUMO_VENDAS_IMAGE}/>
                    </Col>
                    <Col>
						<MenuCard menuText={MENU_PEDIDOS} imageSourcePath={MENU_PEDIDOS_IMAGE}/>
                        <MenuCard menuText={MENU_FERRAMENTAS} imageSourcePath={MENU_FERRAMENTAS_IMAGE}/>
                    </Col>
                </Grid>
            </Content>
        );
    }
}
