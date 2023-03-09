import { config } from "../../utils/api";
import checkResponse from "../../utils/api";
import { setCookie } from "../../utils/cookie";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const userLogin = (email, pass) => {
    return function (dispatch) {
        dispatch({
            type: USER_LOGIN
        })
        fetch(`${config.baseUrl}/auth/login`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${pass}`
            })
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    setCookie('token', res.accessToken, 1200)
                    setCookie('refToken', res.refreshToken)
                    dispatch({
                        type: USER_LOGIN_SUCCESS,
                        res: res
                    })
                } else {
                    dispatch({
                        type: USER_LOGIN_FAILED
                    })
                }
            })
            .catch(err => {
                alert(err)
                dispatch({
                    type: USER_LOGIN_FAILED
                })
            })
    }
}