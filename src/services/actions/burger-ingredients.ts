import { config, request } from "../../utils/api";
import { AppThunk } from "../store";
import { GET_BURGER_INGREDIENTS, GET_BURGER_INGREDIENTS_SUCCESS, GET_BURGER_INGREDIENTS_FAILED } from '../constants';
import { TIngredients } from "../types/data";

export interface IGetBurgerIngredients {
    readonly type: typeof GET_BURGER_INGREDIENTS,
}

export interface IGetBurgerIngredientsSuccess {
    readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS,
    readonly ingredients: TIngredients
}

export interface IGetBurgerIngredientsFailed {
    readonly type: typeof GET_BURGER_INGREDIENTS_FAILED,
}

export type TGetBurgeIngredientsActions =
    | IGetBurgerIngredients
    | IGetBurgerIngredientsSuccess
    | IGetBurgerIngredientsFailed;

export const getIngredients = (): AppThunk => (dispatch) => {
    dispatch({
        type: GET_BURGER_INGREDIENTS
    })
    request<TIngredients>(`${config.baseUrl}/ingredients`, {
        method: "GET",
        headers: config.headers
    }
    )
        .then(res => {
            if (res) {
                dispatch({
                    type: GET_BURGER_INGREDIENTS_SUCCESS,
                    ingredients: res
                })
            }
        }).catch(err => {
            alert(err.message)
            dispatch({
                type: GET_BURGER_INGREDIENTS_FAILED
            })
        })
}