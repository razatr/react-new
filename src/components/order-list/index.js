import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper
} from '@material-ui/core'
import { connect } from 'react-redux'

function createRows(cart, totalPrices) {
    let rows = []
    for (let key in cart) {
        rows.push({name: totalPrices[key].name,
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
    })
    totalDishes.map(dish => {
        res[dish.id] = ({
        name: dish.name,
        price: dish.price,
        ingredients: dish.ingredients
    })
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
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                            <TableCell align="right">{row.cost}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default connect(store => ({
    cart: store.cart,
    totalPrices: getTotalPrice(store.restaurants)
}))(OrderList)