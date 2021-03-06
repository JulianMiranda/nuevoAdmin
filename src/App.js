import React from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './auth/Provider';
import {CustomLoginPage} from './auth/Login';
import Users from './components/users';
import Categories from './components/categories';
import SubCategories from './components/subcategories';
import Products from './components/products';/* 
import Theme from './components/layout/Theme'; */
import {Layout} from './components/layout';
import Orders from './components/orders';


import themeReducer from './themeReducer';
import customRoutes from './routes';

/* import RolesReducer from './store/reducers/roles.reducer'; */
/* import RolesSaga from './store/sagas/roles.saga'; */

const App = (props) => {
	return (
		<Admin
			title="Packuba Admin"
			/* theme={Theme} */
			/* customSagas={[RolesSaga]} */
			/* customReducers={{roles: RolesReducer}} */
			dataProvider={dataProvider}
			authProvider={authProvider}
			loginPage={CustomLoginPage}
			layout={Layout}
			customRoutes={customRoutes}
			customReducers={{theme: themeReducer}}
		>
			{(permissions) =>
				permissions === 'ADMIN' && [
					<Resource
						options={{label: 'Negocios'}}
						name="categories"
						{...Categories}
					/>,
					<Resource
						options={{label: 'Negocios'}}
						name="subcategories"
						{...SubCategories}
					/>,
					<Resource options={{label: 'Usuarios'}} name="users" {...Users} />,
					<Resource options={{label: 'Ordenes'}} name="orders" {...Orders} />,
					<Resource
						options={{label: 'Productos'}}
						name="products"
						{...Products}
					/>
				]
			}
		</Admin>
	);
};

export default App;
