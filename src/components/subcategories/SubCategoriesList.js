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
import {CustomDate} from '../../common/fields/Date';
import Filters from './Filters';

const SubCategoriesList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	return (
		<List
			{...props}
			title="SubCategorías"
			sort={{field: 'createdAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList
					linkType={'show'}
					primaryText={(record) => record.name}
					secondaryText={(record) => record.price}
				/>
			) : (
				<Datagrid rowClick="show">
					<TextField label="Nombre" source="name" />
					<CustomBoolean label="Estado" source="status" />
					<NumberField
						source="price"
						label="Unidad"
						options={{style: 'currency', currency: 'USD'}}
					/>
					<NumberField
						source="priceGalore"
						label="Por_mayor"
						options={{style: 'currency', currency: 'USD'}}
					/>
					<TextField label="Nombre" source="name" />
					<ReferenceField
						label="Categoría"
						source="category"
						reference="categories"
					>
						<TextField source="name" />
					</ReferenceField>

					{/* <CustomDate label="Creado" source="createdAt" /> */}
					<CustomDate label="Editado" source="updatedAt" />
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default SubCategoriesList;
