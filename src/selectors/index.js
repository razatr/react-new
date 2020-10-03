import { createSelector } from 'reselect'

export const restaurantsSelector = state => state.restaurants
export const cartSelector = state => state.cart

export const selectAllDishes = createSelector(restaurantsSelector,
    (restaurants) => {
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
})

export const selectCurrentCart = createSelector(
    [cartSelector, selectAllDishes],
    (cart, totalPrices) => {
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
)