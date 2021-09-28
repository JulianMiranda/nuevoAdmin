import React from 'react';
import {Edit, TextInput, ImageInput, ImageField, SimpleForm, BooleanInput} from 'react-admin';
import {OrdersTitle} from './OrdersTitle';
import {Grid} from '@material-ui/core';

const OrdersEdit = (props) => {
	return (
		<Edit {...props} title={<OrdersTitle />}>
			<SimpleForm redirect="list">
			<BooleanInput label="Realizada" source="status" />
			</SimpleForm>
		</Edit>
	);
};
export default OrdersEdit;
