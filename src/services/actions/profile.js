
import { config } from "../../utils/api";
import checkResponse from "../../utils/api";
import { getCookie } from "../../utils/cookie";

export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";
export const CLEAN_USER_INFO = "CLEAN_USER_INFO"

export const getUserInfo = () => {
    return function (dispatch) {
        dispatch({
            type: GET_USER_INFO
        })
        fetch(`${config.baseUrl}/auth/user`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + `${getCookie('token')}`
            },
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    dispatch({
                        type: GET_USER_INFO_SUCCESS,
                        res: res
                    })
                } else {
                    dispatch({
                        type: GET_USER_INFO_FAILED
                    })
                }
            })
            .catch(err => {
                alert(err)
                dispatch({
                    type: GET_USER_INFO_FAILED
                })
            })
    }
}

export const cleanUserInfo = () => {
    return {
        type: CLEAN_USER_INFO
    }
}