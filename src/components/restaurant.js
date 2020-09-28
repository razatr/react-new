import React, { PureComponent } from 'react'
import RestaurantMenu from './restaurant-menu'

class Restaurant extends PureComponent {
    render() {
        const { name, menu, isMenuOpen } = this.props
        return <React.Fragment>
            {/*<img src={image} width={64} height={64} alt={name}/>*/}
            <h3>{name}</h3>
            <button onClick={this.handleToggleOpenClick}>
                {isMenuOpen ? 'Close menu' : 'Open menu'}
            </button>
            {isMenuOpen ? <RestaurantMenu menu={menu}/> : null}
        </React.Fragment>
    }

    handleToggleOpenClick = (ev) => {
        this.props.toggleOpenMenu(this.props.id)
    }
}

export default Restaurant