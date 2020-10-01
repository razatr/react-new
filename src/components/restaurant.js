import React from 'react'
import RestaurantMenu from './restaurant-menu'
import Reviews from './reviews'
import { AccordionDetails, AccordionSummary, Accordion, Typography, Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

function Restaurant(props) {
    const {
        name,
        menu,
        reviews,
        expanded,
        handleChange,
        id
    } = props

    const avgRate = () => {
        const { reviews } = props
        const avg = reviews.reduce((sum, current) => sum + current.rating, 0) / reviews.length
        return Math.round(2 * avg) / 2
    }

    return <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary>
            <Grid container justify='space-between'>
                <Typography variant='h6'>{name}</Typography>
                <Rating name="read-only" value={avgRate()} readOnly precision={0.5}/>
            </Grid>
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: 'column' }}>
            <RestaurantMenu menu={menu}/>
            <Reviews reviews={reviews}/>
        </AccordionDetails>
    </Accordion>
}

export default Restaurant