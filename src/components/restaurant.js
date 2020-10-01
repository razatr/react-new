import React, { PureComponent } from 'react'
import RestaurantMenu from './restaurant-menu'
import Reviews from './reviews'
import { AccordionDetails, AccordionSummary, Accordion, Typography, Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { withTheme } from '@material-ui/core/styles'

class Restaurant extends PureComponent {
    render() {
        const { name, menu, reviews } = this.props
        return <Accordion>
            <AccordionSummary>
                <Grid container justify='space-between'>
                    <Typography variant='h6'>{name}</Typography>
                    <Rating name="read-only" value={this.avgRate()} readOnly precision={0.5}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: 'column' }}>
                <RestaurantMenu menu={menu}/>
                <Reviews reviews={reviews}/>
            </AccordionDetails>
        </Accordion>
    }

    avgRate() {
        const { reviews } = this.props
        const avg = reviews.reduce((sum, current) => sum + current.rating, 0) / reviews.length
        return Math.round(2 * avg) / 2
    }
}

export default withTheme(Restaurant)