import * as types from "../constants"
import { bunR2D3, sauce } from "./burger-constructor.test"
import { orderDetailsInitialState, orderDetailsReducer } from "./order-details"

const successOrder = {
    success: true,
    name: "Space флюоресцентный бургер",
    order: {
        ingredients: [
            bunR2D3,
            sauce,
        ],
        _id: "642573510905fd001b624cf6",
        owner: {
            name: "Test",
            email: "test@ya.ru",
            createdAt: "2023-03-07T08:29:29.966Z",
            updatedAt: "2023-03-20T09:45:19.438Z"
        },
        status: "done",
        name: "Space spicy флюоресцентный антарианский бургер",
        createdAt: "2023-03-30T11:32:33.318Z",
        updatedAt: "2023-03-30T11:32:33.775Z",
        number: 46801,
        price: 1068
    }
}

describe('order details reducer', () => {
    it('should return the initial state', () => {
        expect(orderDetailsReducer(undefined, {})).toEqual(orderDetailsInitialState)
    })

    it('start request order details', () => {
        expect(orderDetailsReducer(
            orderDetailsInitialState,
            {
                type: types.SEND_ORDER
            }
        )).toEqual({
            ...orderDetailsInitialState,
            orderRequest: true
        })
    })

    it('request order details success', () => {
        expect(orderDetailsReducer(
            {
                ...orderDetailsInitialState,
                orderRequest: true
            },
            {
                type: types.SEND_ORDER_SUCCESS,
                order: successOrder
            }
        )).toEqual({
            ...orderDetailsInitialState,
            popupVisible: true,
            order: successOrder.order
        })
    })

    it('request order details false', () => {
        expect(orderDetailsReducer(
            {
                ...orderDetailsInitialState,
                orderRequest: true
            },
            {
                type: types.SEND_ORDER_FAILED,
            }
        )).toEqual(
            {
                ...orderDetailsInitialState,
                orderFailed: true,
            }
        )
    })
    it('order details hide order', () => {
        expect(orderDetailsReducer(
            {
                ...orderDetailsInitialState,
                popupVisible: true,
                order: successOrder.order
            },
            {
                type: types.HIDE_ORDER
            }
        )).toEqual(orderDetailsInitialState)
    })
})