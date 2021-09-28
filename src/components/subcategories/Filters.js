import React from 'react';
import {Filter, ReferenceInput, SearchInput, SelectInput} from 'react-admin';

const SubcategoryFilter = (props) => {
	return (
		<Filter {...props}>
			<SearchInput source="q" alwaysOn />
			<ReferenceInput
				label="Categoría"
				source="category"
				reference="categories"
				sort={{field: 'id', order: 'ASC'}}
			>
				<SelectInput source="name" />
			</ReferenceInput>
		</Filter>
	);
};
export default SubcategoryFilter;
