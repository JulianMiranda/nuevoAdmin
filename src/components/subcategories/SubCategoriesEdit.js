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
	BooleanInput,
	SelectArrayInput
} from 'react-admin';
import {SubCategoriesTitle} from './SubCategoriesTitle';
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

const SubCategoriesEdit = (props) => {
	const classes = useStyles();
	return (
		<Edit {...props} title={<SubCategoriesTitle />}>
			<SimpleForm redirect="list">
				<TextInput
					label="Nombre"
					autoFocus
					formClassName={classes.first_name}
					fullWidth
					source="name"
				/>
				<ReferenceInput
					label="Categoría"
					fullWidth
					formClassName={classes.last_name}
					source="category.id"
					reference="categories"
				>
					<SelectInput source="name" />
				</ReferenceInput>
				<NumberInput
					formClassName={classes.price}
					label="Precio Unidad"
					source="price"
					min={1}
					step={0.5}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Precio por mayor"
					source="priceGalore"
					min={1}
					step={0.5}
				/>
				<SelectInput
					formClassName={classes.currency}
					source="currency"
					choices={[
						{id: 'USD', name: 'USD'},
						{id: 'CUP', name: 'CUP'}
					]}
				/>
				<BooleanInput
					label="Estado"
					formClassName={classes.t_name}
					source="status"
				/>
				<NumberInput
					formClassName={classes.price}
					label="Peso en gramos"
					source="weight"
					min={1}
					step={1}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Cantidad en stock"
					source="stock"
					min={1}
					step={1}
				/>
				<NumberInput
					formClassName={classes.price}
					label="Costo de compra"
					source="cost"
					min={0}
					step={0.25}
				/>
				<SelectArrayInput
					label="Tallas Disponibles"
					source="aviableSizes"
					choices={[
						{id: 'S', name: 'S'},
						{id: 'M', name: 'M'},
						{id: 'L', name: 'L'}
					]}
				/>
				<SelectArrayInput
					style={{margin: 15}}
					label="Números Disponibles"
					source="aviableSizes"
					choices={[
						{id: '19', name: '19'},
						{id: '20', name: '20'},
						{id: '21', name: '21'},
						{id: '22', name: '22'},
						{id: '23', name: '23'},
						{id: '24', name: '24'},
						{id: '25', name: '25'},
						{id: '26', name: '26'},
						{id: '27', name: '27'},
						{id: '28', name: '28'},
						{id: '29', name: '29'},
						{id: '30', name: '30'},
						{id: '31', name: '31'},
						{id: '32', name: '32'},
						{id: '33', name: '33'},
						{id: '34', name: '34'},
						{id: '35', name: '35'},
						{id: '36', name: '36'},
						{id: '37', name: '37'},
						{id: '38', name: '38'},
						{id: '39', name: '39'},
						{id: '40', name: '40'},
						{id: '41', name: '41'},
						{id: '42', name: '42'},
						{id: '43', name: '43'},
						{id: '44', name: '44'},
						{id: '45', name: '45'},
						{id: '46', name: '46'}
					]}
				/>
				<ImageInput
					formClassName={classes.address}
					source="images"
					resource="subcategories"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					fullWidth
					multiple="true"
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Edit>
	);
};
export default SubCategoriesEdit;
