import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	EditButton,
	ReferenceField,
	SimpleList,
	NumberField
} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import {CustomBoolean} from '../../common/fields/Boolean';
import {Filters} from './Filters';
import ImageField from './ImageField';

const ProductsList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	return (
		<List
			{...props}
			title="Productos"
			sort={{field: 'createdAt', order: 'DESC'}}
			exporter={false}
			filters={<Filters />}
		>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					secondaryText={(record) => (record.value ? record.value : '')}
				/>
			) : (
				<Datagrid rowClick="show">
					<ImageField {...props} />
					<TextField label="Nombre" source="name" />
					<NumberField
						label="Costo"
						source="value"
						options={{style: 'currency', currency: 'USD'}}
					/>
					<NumberField
						label="Venta"
						source="price"
						options={{style: 'currency', currency: 'USD'}}
					/>
					<CustomBoolean label="Estado" source="status" />

					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default ProductsList;
