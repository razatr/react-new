import React, { PureComponent } from 'react'
import RestaurantMenu from './restaurant-menu'
import { Rate, Typography } from 'antd'
import Reviews from './reviews'
import { AccordionDetails, AccordionSummary, Accordion } from '@material-ui/core'

class Restaurant extends PureComponent {
    render() {
        const { name, menu, isMenuOpen, reviews } = this.props
        const { Title } = Typography
        return <Accordion>
            {/*<img src={image} width={64} height={64} alt={name}/>*/}
            <AccordionSummary>{name}</AccordionSummary>
            <AccordionDetails style={{flexDirection:'column'}}>
                <RestaurantMenu menu={menu}/>
                <Reviews reviews={reviews}/>
            </AccordionDetails>
        </Accordion>
    }

    handleToggleOpenClick = () => {
        this.props.toggleOpenMenu(this.props.id)
    }

    avgRate() {
        const { reviews } = this.props
        const avg = reviews.reduce((sum, current) => sum + current.rating, 0) / reviews.length
        return Math.round(2 * avg) / 2
    }
}

export default Restaurant