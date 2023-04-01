import * as types from "../constants"
import { logOutReduser, logOutnitialState } from "./logout"

describe('logout reducer', () => {
    it('should return the initial state', () => {
        expect(logOutReduser(undefined, {})).toEqual(logOutnitialState)
    })

    it('start request logout', () => {
        expect(logOutReduser(
            logOutnitialState,
            {
                type: types.LOG_OUT
            }
        )).toEqual({
            ...logOutnitialState,
            logOutRequest: true
        })
    })

    it('request logout success', () => {
        expect(logOutReduser(
            {
                ...logOutnitialState,
                logOutRequest: true
            },
            {
                type: types.LOG_OUT_SUCCESS,
            }
        )).toEqual(logOutnitialState)})

    it('request logout false', () => {
        expect(logOutReduser(
            {
                ...logOutnitialState,
                logOutRequest: true
            },
            {
                type: types.LOG_OUT_FAILED,
            }
        )).toEqual(
            {
                ...logOutnitialState,
                logOutFailed: true
            }
        )
    })
})