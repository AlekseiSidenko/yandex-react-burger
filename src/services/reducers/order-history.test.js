import * as types from "../constants"
import { orderHistoryReducer } from "./order-history"

const wsMessagePayload = {
    success: true,
    total: 46814,
    totalToday: 235,
    orders: [
        {
            _id: "642578000905fd001b624d2e",
            ingredients: [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc"
            ],
            status: "done",
            name: "Space spicy флюоресцентный бургер",
            createdAt: "2023-03-30T11:52:32.697Z",
            updatedAt: "2023-03-30T11:52:33.194Z",
            number: 46814
        },
        {
            _id: "6420a9fb0905fd001b623719",
            ingredients: [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733d1",
                "60d3b41abdacab0026a733d0",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733d2"
            ],
            status: "done",
            name: "Фалленианский spicy флюоресцентный минеральный астероидный space альфа-сахаридный бургер",
            createdAt: "2023-03-26T20:24:27.176Z",
            updatedAt: "2023-03-26T20:24:27.607Z",
            number: 46162
        },
    ]
}

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