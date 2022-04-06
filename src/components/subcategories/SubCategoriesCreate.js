import React from 'react';

import {
	Create,
	TextInput,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	NumberInput,
	SimpleForm,
	SelectArrayInput,
	required
} from 'react-admin';
import {Grid} from '@material-ui/core';

const SubCategoriesCreate = (props) => {
	return (
		<Create {...props} title="Crear SubCategoría">
			<SimpleForm redirect="list">
				<Grid container style={{width: '100%'}} spacing={2}>
					<Grid item xs={12} sm={12}>
						<TextInput
							style={{margin: 15}}
							label="Nombre"
							autoFocus
							source="name"
							validate={required()}
						/>
						<ReferenceInput
							style={{margin: 15}}
							source="category"
							reference="categories"
							validate={required()}
						>
							<SelectInput source="name" />
						</ReferenceInput>
						<NumberInput
							style={{margin: 15}}
							label="Costo de compra"
							source="cost"
							min={0}
							step={0.25}
						/>
						<NumberInput
							style={{margin: 15}}
							label="Precio Unidad"
							source="price"
							min={1}
							step={0.5}
							validate={required()}
						/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<NumberInput
							style={{margin: 15}}
							label="Precio por Mayor"
							source="priceGalore"
							min={1}
							step={0.5}
							validate={required()}
						/>
						<NumberInput
							style={{margin: 15}}
							label="Peso en gramos"
							source="weight"
							min={1}
							step={1}
						/>
						<NumberInput
							style={{margin: 15}}
							label="Cantidad en stock"
							source="stock"
							min={1}
							step={1}
						/>

						<SelectArrayInput
							style={{margin: 15, minWidth: 120}}
							label="Tallas Disponibles"
							source="aviableSizes"
							choices={[
								{id: 'S', name: 'S'},
								{id: 'M', name: 'M'},
								{id: 'L', name: 'L'}
							]}
						/>
						<SelectArrayInput
							style={{margin: 15, minWidth: 120}}
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
					</Grid>
					<ImageInput
						source="images"
						resource="subcategories"
						accept="image/*"
						placeholder={<p>Drop your file here</p>}
						multiple="true"
						fullWidth
						validate={required()}
					>
						<ImageField source="url" />
					</ImageInput>
				</Grid>
			</SimpleForm>
		</Create>
	);
};
export default SubCategoriesCreate;
