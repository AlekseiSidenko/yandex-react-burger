import { TElement } from "../types/data";
import { GET_BURGER_INGREDIENTS, GET_BURGER_INGREDIENTS_SUCCESS, GET_BURGER_INGREDIENTS_FAILED } from "../constants";
import { TGetBurgeIngredientsActions } from "../actions/burger-ingredients";

type TState = {
    ingredientsRequest: boolean,
    ingredientsFailed: boolean,
    ingredients: TElement[]
}

const initialState = {
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: []
}

export const ingredientsReducer = (state: TState = initialState, action: TGetBurgeIngredientsActions): TState => {
    switch (action.type) {
        case GET_BURGER_INGREDIENTS: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false
            };
        }
        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredients: action.ingredients.data,
                ingredientsRequest: false
            };
        }
        case GET_BURGER_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsFailed: true,
                ingredientsRequest: false
            };
        }
        default: {
            return state
        }
    }
}