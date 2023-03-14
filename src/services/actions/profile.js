import { config } from "../../utils/api";
import checkResponse from "../../utils/api";

export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";
export const GET_NEW_TOKEN_SUCCESS = "GET_NEW_TOKEN_SUCCESS";
export const CLEAN_USER_INFO = "CLEAN_USER_INFO";

export const getUserInfo = (token, refreshToken) => {
    return function (dispatch) {
        dispatch({
            type: GET_USER_INFO
        })
        fetch(`${config.baseUrl}/auth/user`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + `${token}`
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
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    fetch(`${config.baseUrl}/auth/token`, {
                        method: "POST",
                        headers: config.headers,
                        body: JSON.stringify({
                            "token": `${refreshToken}`,
                        })
                    })
                        .then(res => checkResponse(res))
                        .then(res => {
                            if (res) {
                                dispatch({
                                    type: GET_NEW_TOKEN_SUCCESS,
                                    res: res
                                })
                            }
                        })
                        .then(() => dispatch(getUserInfo(token)))
                        .catch((err) => {
                            console.log(err)
                        })
                } else {
                    dispatch({
                        type: GET_USER_INFO_FAILED
                    })
                }
                console.log(err)
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
