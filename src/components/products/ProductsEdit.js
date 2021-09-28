import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	SimpleForm,
	NumberInput,
	BooleanInput
} from 'react-admin';
import {ProductsTitle} from './ProductsTitle';
import {makeStyles} from '@material-ui/core/styles';

export const styles = {
	first_name: {display: 'inline-block'},
	last_name: {display: 'inline-block', marginLeft: 32},
	t_name: {display: 'inline-block', marginLeft: 64},
	email: {width: 544},
	address: {maxWidth: 300},
	price: {display: 'inline-block', marginLeft: 32},
	currency: {display: 'inline-block', marginLeft: 32}
};

const useStyles = makeStyles(styles);

const ProductsEdit = (props) => {
	const classes = useStyles();
	return (
		<Edit {...props} title={<ProductsTitle />}>
			<SimpleForm redirect="list">
				<NumberInput
					formClassName={classes.price}
					autoFocus
					label="Precio de Compra"
					source="value"
					min={1}
					step={0.5}
				/>
			</SimpleForm>
		</Edit>
	);
};
export default ProductsEdit;
