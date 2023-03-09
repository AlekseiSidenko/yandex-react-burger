import { config } from "../../utils/api";
import checkResponse from "../../utils/api";

export const USER_REGISTER = "USER_REGISTER";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED = "USER_REGISTER_FAILED";
export const REGISTER_CLEAN_STATE = "REGISTER_CLEAN_STATE"

export const userRegister = (userName, email, pass) => {
    return function(dispatch) {
        dispatch({
            type: USER_REGISTER
        })
        fetch(`${config.baseUrl}/auth/register`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${pass}`,
                "name": `${userName}`
            })
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    dispatch({
                        type: USER_REGISTER_SUCCESS,
                        res: res
                    })
                } else {
                    dispatch({
                        type: USER_REGISTER_FAILED
                    })
                }
            })
            .then(() => {
                dispatch({
                    type: REGISTER_CLEAN_STATE
                })
            })
            .catch(err => {
                alert(err)
                dispatch({
                    type: USER_REGISTER_FAILED
                })
            })
    }
}