import { createSelector } from 'reselect'

export const idSelector = (_, ownProps) => ownProps.id
export const userIdSelector = (_, ownProps) => ownProps.userId
export const restaurantsSelector = state =>
    state.restaurants.get('entities').toJS()
export const dishesSelector = state =>
    state.dishes.get('entities').toJS()
export const reviewsSelector = state =>
    state.reviews.get('entities').toJS()
export const usersSelector = state =>
    state.users.get('entities').toJS()
export const cartSelector = state => state.cart.toJS()

//loading and loaded selectors
export const restaurantsLoadingSelector = state => state.restaurants.get('loading')
export const dishesLoadingSelector = state => state.dishes.get('loading')
export const reviewsLoadingSelector = state => state.reviews.get('loading')
export const usersLoadingSelector = state => state.users.get('loading')

export const restaurantsLoadedSelector = state => state.restaurants.get('loaded')
export const dishesLoadedSelector = state => state.dishes.get('loaded')
export const reviewsLoadedSelector = state => state.reviews.get('loaded')
export const usersLoadedSelector = state => state.users.get('loaded')


export const dishSelector = createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
        return dishes.find(dish => dish.id === id)
    }
)

export const restaurantSelector = createSelector(
    restaurantsSelector,
    idSelector,
    (restaurants, id) => {
        return restaurants.find(restaurant => restaurant.id === id)
    }
)

export const userSelector = createSelector(
    usersSelector,
    userIdSelector,
    (users, id) => {
        return users.find(user => user.id === id)
    }
)

export const reviewSelector =  createSelector(
        reviewsSelector,
        idSelector,
        (reviews, id) => {
            return reviews.find(review => review.id === id)
        }
    )

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

export const selectDishLoadedInRestaurant = createSelector(
    restaurantSelector,
    (restaurant) => restaurant.dishesLoaded
)

export const selectReviewsLoadedInRestaurant = createSelector(
    restaurantSelector,
    (restaurant) => restaurant.reviewsLoaded
)