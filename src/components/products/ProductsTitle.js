import React from 'react';

export const ProductsTitle = ({record}) => {
	return <span>Producto {record ? `"${record.name}"` : ''}</span>;
};
