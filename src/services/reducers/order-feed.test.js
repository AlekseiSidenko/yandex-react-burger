import * as types from "../constants"
import { orderFeedReducer } from "./order-feed"

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
        expect(orderFeedReducer(undefined, {})).toEqual(
            {
                wsConnected: false,
                orderFeed: null,
            }
        )
    })
    it('success feed web socket', () => {
        expect(orderFeedReducer(
            {
                wsConnected: false,
                orderFeed: null,
            },
            {
                type: types.ORDER_FEED_SUCCESS
            }
        )).toEqual(
            {
                wsConnected: true,
                orderFeed: null,
            }
        )
    })
    it('error feed web socket', () => {
        expect(orderFeedReducer(
            {
                wsConnected: true,
                orderFeed: null,
            },
            {
                type: types.ORDER_FEED_ERROR
            }
        )).toEqual(
            {
                wsConnected: false,
                orderFeed: null,
            }
        )
    })
    it('feed web socket get message', () => {
        expect(orderFeedReducer(
            {
                wsConnected: true,
                orderFeed: null,
            },
            {
                type: types.ORDER_FEED_GET_MESSAGE,
                payload: wsMessagePayload
            }
        )).toEqual({
            wsConnected: true,
            orderFeed: wsMessagePayload
        })
    })
    it('feed web socket close', () => {
        expect(orderFeedReducer(
            {
                wsConnected: true,
                orderFeed: wsMessagePayload,
            },
            {
                type: types.ORDER_FEED_CLOSE,
            }
        )).toEqual({
            wsConnected: false,
            orderFeed: wsMessagePayload
        })
    })
    it('feed web socket closed', () => {
        expect(orderFeedReducer(
            {
                wsConnected: true,
                orderFeed: wsMessagePayload,
            },
            {
                type: types.ORDER_FEED_CLOSED,
            }
        )).toEqual({
            wsConnected: false,
            orderFeed: wsMessagePayload
        })
    })
})