import {AppHeader} from '../components/AppHeader';
import Colors from '../constants/Colors';
import React from 'react';
import { Content, Button, Toast} from "native-base";
import {Text} from 'react-native';
import {CustomerDataCard} from '../components/CustomerDataCard';
import * as CustomerAPI from '../api/CustomerApi';
import {CustomerContactCard} from '../components/CustomerContactCard';

export class CustomerDetailScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <AppHeader title='Dados do cliente'/>,
		headerTintColor: Colors.titleTextColor,
		headerStyle: {
			backgroundColor: Colors.headerTintColor,
		}
	};

	state = {
		customer: null,
	};

	componentDidMount() {
		CustomerAPI.getCustomer()
			.then((customer) => {
				if (customer) {
					this.setState({customer});
				}
			});
	}

	showToast = (_screen) => () => {
		CustomerAPI.getCustomer()
			.then((customer) => {
				if (customer) {
					_screen.setState({customer});
				}
			});

		let status = _screen.state.customer ? _screen.state.customer.status : 'offline';

		Toast.show({
			text: `Status ${status}`,
		});
	};

	render() {
		let {customer} = this.state;

		if (customer && customer.codigo) {
			return (
				<Content padder>
					<CustomerDataCard customer={customer}/>
					<CustomerContactCard contacts={customer.contatos}/>
					<Button block success onPress={this.showToast(this)}><Text> Verificar status do cliente </Text></Button>
				</Content>
			);
		}
		return (
			<Content padder>
			</Content>
		);

	}
}
