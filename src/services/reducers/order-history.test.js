import * as types from "../constants"
import { wsMessagePayload } from "./order-feed.test"
import { orderHistoryReducer } from "./order-history"

describe('feed web socket', () => {
    it('should return the initial state', () => {
        expect(orderHistoryReducer(undefined, {})).toEqual(
            {
                wsConnected: false,
                orderHistory: null,
            }
        )
    })
    it('success feed web socket', () => {
        expect(orderHistoryReducer(
            {
                wsConnected: false,
                orderHistory: null,
            },
            {
                type: types.ORDER_HISTORY_SUCCESS
            }
        )).toEqual(
            {
                wsConnected: true,
                orderHistory: null,
            }
        )
    })
    it('error feed web socket', () => {
        expect(orderHistoryReducer(
            {
                wsConnected: true,
                orderHistory: null,
            },
            {
                type: types.ORDER_HISTORY_ERROR
            }
        )).toEqual(
            {
                wsConnected: false,
                orderHistory: null,
            }
        )
    })
    it('feed web socket get message', () => {
        expect(orderHistoryReducer(
            {
                wsConnected: true,
                orderHistory: null,
            },
            {
                type: types.ORDER_HISTORY_GET_MESSAGE,
                payload: wsMessagePayload
            }
        )).toEqual({
            wsConnected: true,
            orderHistory: wsMessagePayload
        })
    })
    it('feed web socket close', () => {
        expect(orderHistoryReducer(
            {
                wsConnected: true,
                orderHistory: wsMessagePayload,
            },
            {
                type: types.ORDER_HISTORY_CLOSE,
            }
        )).toEqual({
            wsConnected: false,
            orderHistory: wsMessagePayload
        })
    })
    it('feed web socket closed', () => {
        expect(orderHistoryReducer(
            {
                wsConnected: true,
                orderHistory: wsMessagePayload,
            },
            {
                type: types.ORDER_HISTORY_CLOSED,
            }
        )).toEqual({
            wsConnected: false,
            orderHistory: wsMessagePayload
        })
    })
})