import { setCookie } from "../../utils/cookie"
import { TRegisterActions } from "../actions/register";
import { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED, REGISTER_CLEAN_STATE } from "../constants";
import { TUserRegLogin } from "../types/data";

type TState = {
    userRegisterRequest: boolean,
    userRegisterFailed: boolean,
    res?: TUserRegLogin
}

export const registerInitialState = {
    userRegisterRequest: false,
    userRegisterFailed: false,
    res: undefined
}

export const userRegisterReduser = (state: TState = registerInitialState, action: TRegisterActions): TState => {
    switch (action.type) {
        case USER_REGISTER: {
            return {
                ...state,
                userRegisterRequest: true,
                userRegisterFailed: false
            }
        }
        case USER_REGISTER_SUCCESS: {
            setCookie('token', action.res.accessToken);
            setCookie('refToken', action.res.refreshToken)
            return {
                ...state,
                userRegisterRequest: false,
                res: action.res
            }
        }
        case USER_REGISTER_FAILED: {
            return {
                ...state,
                userRegisterRequest: false,
                userRegisterFailed: true
            }
        }
        case REGISTER_CLEAN_STATE: {
            return {
                userRegisterRequest: false,
                userRegisterFailed: false,
                res: undefined
            }
        }
        default: {
            return state
        }
    }
}