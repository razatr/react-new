import React, { PureComponent } from 'react'
import RestaurantMenu from './restaurant-menu'
import { Rate, Typography } from 'antd'
import Reviews from './reviews'

class Restaurant extends PureComponent {
    render() {
        const { name, menu, isMenuOpen, reviews } = this.props
        const { Title } = Typography
        return <React.Fragment>
            {/*<img src={image} width={64} height={64} alt={name}/>*/}
            <Title level={3}>{name}</Title>
            <Rate disabled allowHalf defaultValue={this.avgRate()}/><br/>
            <button onClick={this.handleToggleOpenClick}>
                {isMenuOpen ? 'Close menu' : 'Open menu'}
            </button>
            {isMenuOpen ? <RestaurantMenu menu={menu}/> : null}
            {isMenuOpen ? <Reviews reviews={reviews}/> : null}
        </React.Fragment>
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