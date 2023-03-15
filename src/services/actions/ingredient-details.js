export const SHOW_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const HIDE_INGREDIENT_DETAILS = "HIDE_INGREDIENT_DETAILS";

export const showIngreidient = (data) => {
    return {
        type: SHOW_INGREDIENT_DETAILS,
        payload: {
            data
        }
    }
}

export const hideIngredient = () => {
    return {
        type: HIDE_INGREDIENT_DETAILS
    }
}