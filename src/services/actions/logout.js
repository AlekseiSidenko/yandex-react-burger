
import { config } from "../../utils/api";
import checkResponse from "../../utils/api";
import { getCookie, deleteCookie } from "../../utils/cookie";
import { CLEAN_USER_INFO } from "./profile";

export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILED = "LOG_OUT_FAILED";
export const CLEAN_LOG_OUT_INFO = "CLEAN_LOG_OUT_INFO";

export const logOut = () => {
    return function (dispatch) {
        dispatch({
            type: LOG_OUT
        })
        fetch(`${config.baseUrl}/auth/logout`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "token": `${getCookie('refToken')}`,
            })
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    dispatch({
                        type: LOG_OUT_SUCCESS,
                    })
                } else {
                    dispatch({
                        type: LOG_OUT_FAILED,
                        
                    })
                }
            })
            .then(() => {
                dispatch({
                    type: CLEAN_USER_INFO
                })
            })
            .catch(err => {
                alert(err)
                dispatch({
                    type: LOG_OUT_FAILED,
                    type: CLEAN_USER_INFO
                })
            })
    }
}