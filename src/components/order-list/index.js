import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper, IconButton
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { connect } from 'react-redux'
import { deleteCart } from '../../AC'

function createRows(cart, totalPrices) {
    let rows = []
    for (let key in cart) {
        rows.push({
            id: key,
            name: totalPrices[key].name,
            count: cart[key],
            cost: totalPrices[key].price * cart[key]
        })
    }
    return rows
}

function getTotalPrice(restaurants) {
    let totalDishes = []
    let res = {}
    restaurants.map(restaurant => {
        totalDishes = totalDishes.concat(restaurant.menu)
        return null
    })
    totalDishes.map(dish => {
        res[dish.id] = ({
            name: dish.name,
            price: dish.price,
            ingredients: dish.ingredients
        })
        return null
    })
    return res
}

function OrderList(props) {

    const { cart, totalPrices } = props

    const rows = createRows(cart, totalPrices)

    return (
        <TableContainer component={Paper}>
            <Table aria-label="a dense table">
                <TableHead>
                    { rows.length? (<TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Cost</TableCell>
                    </TableRow>) : null}
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                            <TableCell align="right">{row.cost}</TableCell>
                            <TableCell align="right" padding="none">
                                <IconButton onClick={() =>
                                    props.deleteCart(row.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    {rows.length ? (<TableRow>
                        <TableCell component="th" scope="row">
                            Total
                        </TableCell>
                        <TableCell align="right" >
                            {rows.reduce((sum, current) => sum + current.count, 0)}
                        </TableCell>
                        <TableCell align="right">
                            {rows.reduce((sum, current) => sum + current.cost, 0)}
                        </TableCell>
                    </TableRow>): null}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default connect(
    state => ({
        cart: state.cart,
        totalPrices: getTotalPrice(state.restaurants)
    }),
    {
        deleteCart
    }
)(OrderList)