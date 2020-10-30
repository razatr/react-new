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
import { selectCurrentCart } from '../../selectors'

function OrderList(props) {

    const { cart: rows } = props

    return (
        <TableContainer component={ Paper }>
            <Table aria-label="a dense table">
                <TableHead>
                    { rows.length ? (<TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Cost</TableCell>
                        <TableCell />
                    </TableRow>) : null }
                </TableHead>
                <TableBody>
                    { rows.map((row) => (
                        <TableRow key={ row.id }>
                            <TableCell component="th" scope="row">
                                { row.name }
                            </TableCell>
                            <TableCell align="right">{ row.count }</TableCell>
                            <TableCell align="right">{ row.cost }</TableCell>
                            <TableCell align="right" padding="none">
                                <IconButton onClick={ () =>
                                    props.deleteCart(row.id) }>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )) }
                    { rows.length ? (<TableRow>
                        <TableCell component="th" scope="row">
                            Total
                        </TableCell>
                        <TableCell align="right">
                            { rows.reduce((sum, current) => sum + current.count, 0) }
                        </TableCell>
                        <TableCell align="right">
                            { rows.reduce((sum, current) => sum + current.cost, 0) }
                        </TableCell>
                    </TableRow>) : null }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default connect(
    state => ({
        cart: selectCurrentCart(state)
    }),
    {
        deleteCart
    }
)(OrderList)