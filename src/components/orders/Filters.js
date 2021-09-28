import React from 'react';
import {Filter, SearchInput, SelectInput} from 'react-admin';

export const Filters = (props) => (

    <Filter {...props}>
        {/* <SearchInput source="q" alwaysOn /> */}
		<SelectInput
        alwaysOn
			label="Estado"
			source="status"
			choices={[
				{id: 'true', name: 'Pendientes'},
				{id: 'false', name: 'Hechas'},
			]}
		/>
        <SelectInput
        alwaysOn
			label="Lista"
			source="owner"
			choices={[
				{id: 'Pablo', name: 'Pablo'},
				{id: 'Julian', name: 'Julian'},
			]}
		/>
    </Filter>
);