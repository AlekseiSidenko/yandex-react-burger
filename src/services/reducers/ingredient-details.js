import { HIDE_INGREDIENT_DETAILS, SHOW_INGREDIENT_DETAILS } from "../actions/ingredient-details"

const initialState = ({
    visible: false,
    data: []
})

export const ingredientDetailsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INGREDIENT_DETAILS: {
            return {
                visible: true,
                data: action.payload.data,
            }
        }
        case HIDE_INGREDIENT_DETAILS: {
            return {
                visible: false,
                data: []
            }
        }
        default: {
            return state
        }
    }
}