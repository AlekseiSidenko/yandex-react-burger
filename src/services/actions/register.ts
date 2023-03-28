import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";
import { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED, REGISTER_CLEAN_STATE } from "../constants";
import { TUserRegLogin } from "../types/data";

export interface IUserRegister {
    readonly type: typeof USER_REGISTER
}

export interface IUserRegisterSuccess {
    readonly type: typeof USER_REGISTER_SUCCESS
    readonly res: TUserRegLogin
}

export interface IUserRegisterFailed {
    readonly type: typeof USER_REGISTER_FAILED
}

export interface IRegisterCleanState {
    readonly type: typeof REGISTER_CLEAN_STATE
}

export const userRegister: AppThunk = (userName: string, email: string, pass: string) => {
    return function(dispatch: AppDispatch) {
        dispatch({
            type: USER_REGISTER
        })
        request(`${config.baseUrl}/auth/register`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${pass}`,
                "name": `${userName}`
            })
        })
            .then(res => {
                if (res) {
                    dispatch({
                        type: USER_REGISTER_SUCCESS,
                        res: res
                    })
                }
            })
            .then(() => {
                dispatch({
                    type: REGISTER_CLEAN_STATE
                })
            })
            .catch(err => {
                alert(err.message)
                dispatch({
                    type: USER_REGISTER_FAILED
                })
            })
    }
}