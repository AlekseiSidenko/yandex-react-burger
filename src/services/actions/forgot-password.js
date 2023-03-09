import { config } from "../../utils/api";
import checkResponse from "../../utils/api";

export const GET_TOKEN = "GET_TOKEN_CODE";
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
export const GET_TOKEN_FAILED = "GET_TOKEN_FAILED";
export const GET_TOKEN_CLEAN_STATE = "GET_TOKEN_CLEAN_STATE"

export const getToken = (email) => {
    return function (dispatch) {
        dispatch({
            type: GET_TOKEN
        })
        fetch(`${config.baseUrl}/password-reset`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "email": `${email}`,
            })
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    dispatch({
                        type: GET_TOKEN_SUCCESS,
                        res: res
                    })
                } else {
                    dispatch({
                        type: GET_TOKEN_FAILED
                    })
                }
            })
            .then(() => {
                dispatch({
                    type: GET_TOKEN_CLEAN_STATE
                })
            })
            .catch(err => {
                alert(err)
                dispatch({
                    type: GET_TOKEN_FAILED
                })
            })
    }
}