import * as types from "../constants"
import { logOutReduser } from "./logout"

describe('logout reducer', () => {
    it('should return the initial state', () => {
        expect(logOutReduser(undefined, {})).toEqual(
            {
                logOutRequest: false,
                logOutFailed: false,
            }
        )
    })
    it('start request logout', () => {
        expect(logOutReduser(
            {
                logOutRequest: false,
                logOutFailed: false,
            },
            {
                type: types.LOG_OUT
            }
        )).toEqual(
            {
                logOutRequest: true,
                logOutFailed: false,
            }
        )
    })
    it('request logout success', () => {
        expect(logOutReduser(
            {
                logOutRequest: true,
                logOutFailed: false,
            },
            {
                type: types.LOG_OUT_SUCCESS,
            }
        )).toEqual(
            {
                logOutRequest: false,
                logOutFailed: false,
            }
        )
    })
    it('request logout false', () => {
        expect(logOutReduser(
            {
                logOutRequest: true,
                logOutFailed: false,
            },
            {
                type: types.LOG_OUT_FAILED,
            }
        )).toEqual(
            {
                logOutRequest: false,
                logOutFailed: true,
            }
        )
    })
})