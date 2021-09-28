import React from 'react';
import {useShowController, Show} from 'react-admin';
import {Grid, CardContent, Card , Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,Avatar} from '@material-ui/core';
import {OrdersTitle} from './OrdersTitle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	table: {
	  minWidth: 650,
	  marginTop: 20
	},
  });
  
 
  


const OrdersShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();
	if (!record) return null;
	/* console.log(record.car); */
	function createData(name, cantidad, precio, categ, total, images) {
		return { name, cantidad, precio, categ, total, images };
	  }
	  
	  const rows = record.car.map((item)=> createData(item.subcategory.name,item.cantidad,item.cantidad < 6 ? item.subcategory.price : item.subcategory.priceGalore,item.subcategory.category.name, item.cantidad < 6 ? item.subcategory.price * item.cantidad : item.subcategory.priceGalore*item.cantidad, item.subcategory.images,));

	  var final = 0;
	  for (const item of record.car){
		if (item.cantidad <6) {
		 final +=	item.subcategory.price * item.cantidad;
		} else {
			final +=	item.subcategory.priceGalore * item.cantidad;
		}
	  }
	return (
		<Show title={<OrdersTitle />} {...props}>
			<Card>
				<CardContent>
				<Grid container spacing={-8}>
					{record.user.name} - {record.user.phone}
				</Grid>
				<TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Foto</TableCell>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio&nbsp;($)</TableCell>
            <TableCell align="right">Categoría&nbsp;(g)</TableCell>
            <TableCell align="right">Total&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
				
				<TableCell align="right"><Avatar
			src={row.images[0].url}
			style={{width: parseInt(25, 15), height: parseInt(25, 15)}}
		
		/></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.categ}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

	<div
	style={{
		textAlign: 'right',
		marginRight: 5,
		flex: 1,
		alignSelf: 'flex-end',
		marginTop: 10,
		fontSize: 22
		}}
		>
		Precio Final - ${final}
		</div>

		<div
	style={{
		flex: 1,
		marginTop: 20,
		}}
		>
		Descripción: {record.description}
		</div>

	{/* <Grid container alignContent="flex-end" alignItems="flex-end" justifyContent="flex-end" marginTop="30"> 
					Precio Final - {final}
				</Grid> */}
				{/* <Grid container spacing={-8}>
					{record.user.name} - {record.user.phone}
				</Grid>
					<Grid container spacing={-8}>
						<Grid container spacing={2}>
						
							<Grid item xs={4} sm={4}>
								{record.car.map((item, i) => (
									<>
										<div
											style={{
												flexDirection: 'row',
												marginTop: 10,
											}}
										>
											{item.cantidad}- {item.subcategory.name}
											{'  '}
										</div>
									</>
								))}
							</Grid>
							<Grid item xs={4} sm={4}>
								{record.car.map((item, i) => (
									<>
										<div style={{flex: 1, marginTop: 10}}>$ {item.cantidad < 6 ? item.subcategory.price : item.subcategory.priceGalore }</div>
									</>
								))}
							</Grid>
							<Grid item xs={4} sm={4}>
								{record.car.map((item, i) => (
									<>
										<div style={{flex: 1, marginTop: 10}}>{item.subcategory.category.name}</div>
									</>
								))}
							</Grid>
						</Grid>
						{
									<>
										<div style={{flex: 1, marginTop: 30}}>Descripción: {record.description}</div>
									</>
							}
					</Grid> */}
				</CardContent>
			</Card>
		</Show>
	);
};

export default OrdersShow;
