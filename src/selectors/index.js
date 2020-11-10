import { createSelector } from 'reselect'

export const idSelector = (_, ownProps) => ownProps.id
export const userIdSelector = (_, ownProps) => ownProps.id
export const restaurantsSelector = (state) => state.restaurants.get('entities').toJS()
export const dishesSelector = (state) => state.dishes.get('entities').toJS()
export const reviewsSelector = (state) => state.reviews.get('entities').toJS()
export const usersSelector = (state) => state.users.get('entities').toJS()
export const cartSelector = (state) => state.cart.toJS()

export const restaurantsLoadedSelector = (state) => state.restaurants.get('loaded')
export const dishesLoadedSelector = (state) => state.dishes.get('loaded')
export const reviewsLoadedSelector = (state) => state.reviews.get('loaded')
export const usersLoadedSelector = (state) => state.users.get('loaded')

export const dishSelector = createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => dishes.find((dish) => dish.id === id),
)

export const restaurantSelector = createSelector(
    restaurantsSelector,
    idSelector,
    (restaurants, id) => restaurants.find((restaurant) => restaurant.id === id),
)

export const userSelector = createSelector(
    usersSelector,
    userIdSelector,
    (users, id) => users.find((user) => user.id === id),
)

export const reviewSelector = createSelector(
    reviewsSelector,
    idSelector,
    (reviews, id) => reviews.find((review) => review.id === id),
)

export const selectAllDishes = createSelector(dishesSelector,
    (dishes) => {
        const res = {}
        dishes.map((dish) => {
            res[dish.id] = ({
                name: dish.name,
                price: dish.price,
                ingredients: dish.ingredients,
            })
            return null
        })
        return res
    })

export const selectCurrentCart = createSelector(
    [ cartSelector, selectAllDishes ],
    (cart, totalPrices) => {
        const rows = []
        for (const key of Object.keys(cart)) {
            rows.push({
                id: key,
                name: totalPrices[key].name,
                ingredients: totalPrices[key].ingredients,
                count: cart[key],
                cost: totalPrices[key].price * cart[key],
            })
        }
        return rows
    },
)
