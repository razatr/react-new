import { createSelector } from 'reselect'

export const idSelector = (_, ownProps) => ownProps.id
export const userIdSelector = (_, ownProps) => ownProps.userId
export const restaurantsSelector = state =>
    state.restaurants.get('entities').toJS()
export const cartSelector = state => state.cart.toJS()
export const dishesSelector = state => state.dishes
export const reviewsSelector = state => state.reviews.toJS()
export const usersSelector = state => state.users
export const loadingSelector = state => state.restaurants.get('loading')

export const createDishSelector = () => {
    return createSelector(
        dishesSelector,
        idSelector,
        (dishes, id) => {
            return dishes.find(dish => dish.id === id)
        }
    )

}

export const createUserSelector = () => {
    return createSelector(
        usersSelector,
        userIdSelector,
        (users, id) => {
            return users.find(user => user.id === id)
        }
    )
}

export const createReviewSelector = () => {
    return createSelector(
        reviewsSelector,
        idSelector,
        (reviews, id) => {
            return reviews.find(review => review.id === id)
        }
    )
}

export const selectAllDishes = createSelector(dishesSelector,
    (dishes) => {
        let res = {}
        dishes.map(dish => {
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