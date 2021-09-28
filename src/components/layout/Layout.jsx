import React from 'react';
import {Layout, Sidebar} from 'react-admin';
import Menu from './Menu';
import AppBar from './AppBar';

import {useSelector} from 'react-redux';
import {darkTheme, lightTheme} from './Themes';

const CustomSidebar = (props) => <Sidebar {...props} size={200} />;

export default (props) => {
	const theme = useSelector((state) => (state.theme === 'dark' ? darkTheme : lightTheme));
	return <Layout {...props} appBar={AppBar} sidebar={CustomSidebar} theme={theme} menu={Menu} />;
};
