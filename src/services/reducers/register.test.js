import * as types from "../constants"
import { successUserLogin } from "./login.test"
import { registerInitialState, userRegisterReduser } from "./register"

describe('register reducer', () => {
    it('should return the initial state', () => {
        expect(userRegisterReduser(undefined, {})).toEqual(registerInitialState)})

    it('start request register', () => {
        expect(userRegisterReduser(
registerInitialState,
            {
                type: types.USER_REGISTER
            }
        )).toEqual(
            {
                ...registerInitialState,
                userRegisterRequest: true,
            }
        )
    })
    it('request register success', () => {
        expect(userRegisterReduser(
            {
                ...registerInitialState,
                userRegisterRequest: true,
            },
            {
                type: types.USER_REGISTER_SUCCESS,
                res: successUserLogin
            }
        )).toEqual(
            {
                ...registerInitialState,
                res: successUserLogin
            }
        )
    })
    it('request register false', () => {
        expect(userRegisterReduser(
            {
                ...registerInitialState,
                userRegisterRequest: true,
            },
            {
                type: types.USER_REGISTER_FAILED,
            }
        )).toEqual(
            {
                ...registerInitialState,
                userRegisterFailed: true,
            }
        )
    })
    it('register clean state', () => {
        expect(userRegisterReduser(
            {
                ...registerInitialState,
                res: successUserLogin
            },
            {
                type: types.REGISTER_CLEAN_STATE,
            }
        )).toEqual(registerInitialState)})
})