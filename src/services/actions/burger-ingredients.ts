import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";

export const GET_BURGER_INGREDIENTS: "GET_BURGER_INGREDIENTS" = "GET_BURGER_INGREDIENTS";
export const GET_BURGER_INGREDIENTS_SUCCESS: "GET_BURGER_INGREDIENTS_SUCCESS" = "GET_BURGER_INGREDIENTS_SUCCESS";
export const GET_BURGER_INGREDIENTS_FAILED: "GET_BURGER_INGREDIENTS_FAILED" = "GET_BURGER_INGREDIENTS_FAILED";

export const getIngredients: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_BURGER_INGREDIENTS
        })
        request(`${config.baseUrl}/ingredients`, {
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
}