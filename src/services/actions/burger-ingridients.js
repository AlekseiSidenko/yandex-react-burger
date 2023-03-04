import { config } from "../../utils/api";
import checkResponse from "../../utils/api";

export const GET_BURGER_INGRIDIENTS = "GET_BURGER_INGRIDIENTS";
export const GET_BURGER_INGRIDIENTS_SUCCESS = "GET_BURGER_INGRIDIENTS_SUCCESS";
export const GET_BURGER_INGRIDIENTS_FAILED = "GET_BURGER_INGRIDIENTS_FAILED";

export const getIngridients = () => {
    return function (dispatch) {
        dispatch({
            type: GET_BURGER_INGRIDIENTS
        })
        fetch(`${config.baseUrl}/ingredients`)
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    dispatch({
                        type: GET_BURGER_INGRIDIENTS_SUCCESS,
                        ingridients: res.data
                    })
                } else {
                    dispatch({
                        type: GET_BURGER_INGRIDIENTS_FAILED
                    })
                }
            }).catch(err => {
                alert(err)
                dispatch({
                    type: GET_BURGER_INGRIDIENTS_FAILED
                })
            })
    }
}