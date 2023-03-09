import { config } from "../../utils/api";
import checkResponse from "../../utils/api";
import { getCookie, setCookie } from "../../utils/cookie";

export const GET_NEW_TOKEN = "GET_NEW_TOKEN";
export const GET_NEW_TOKEN_SUCCESS = "GET_NEW_TOKEN_SUCCESS";
export const GET_NEW_TOKEN_FAILED = "GET_NEW_TOKEN_FAILED";
export const CLEAN_NEW_TOKEN = "CLEAN_NEW_TOKEN"

export const getNewToken = () => {
    return function (dispatch) {
        dispatch({
            type: GET_NEW_TOKEN
        })
        fetch(`${config.baseUrl}/auth/token`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "token": `${getCookie('refToken')}`,
            })
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    setCookie('token', res.accessToken, 1200)
                    setCookie('refToken', res.refreshToken)
                    dispatch({
                        type: GET_NEW_TOKEN_SUCCESS,
                        res: res
                    })
                } else {
                    dispatch({
                        type: GET_NEW_TOKEN_FAILED
                    })
                }
            })
            .then(() => {
                dispatch({
                    type: CLEAN_NEW_TOKEN
                })
            })
            .catch(err => {
                alert(err)
                dispatch({
                    type: GET_NEW_TOKEN_FAILED
                })
            })
    }
}