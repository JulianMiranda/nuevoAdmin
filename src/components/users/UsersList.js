import React from 'react';
import {List, Datagrid, EditButton, EmailField, TextField} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import {CustomBoolean} from '../../common/fields/Boolean';
import {Filters} from './Filters';
import {useStyles} from './UsersStyles';
/* import UserLinkField from './UserLinkField'; */
import UsersListMobile from './UsersListMobile';
import FullNameField from './FullNameField';
import {CustomDate} from '../../common/fields/Date';


const UsersList = (props) => {

	
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	const classes = useStyles();

	return (
		<List
			{...props}
			title="Usuarios"
			sort={{field: 'updatedAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<UsersListMobile />
			) : (
				<>
				
				<Datagrid rowClick="show">

					{/* <UserLinkField /> */}
					<FullNameField {...props} />

					<TextField label="Móvil" source="phone" />
					{/* <EmailField className={classes.email} label="Correo" source="email" /> */}
					{/* <TextField label="Rol" source="role" /> */}
					<CustomDate label="Creado" source="createdAt" />
					<CustomBoolean label="Estado" source="status" />
					<EditButton label="Editar" />
				</Datagrid>
				</>
			)}
		</List>
	);
};
export default UsersList;
