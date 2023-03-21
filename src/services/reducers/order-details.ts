import { TElement, TOrderOptions } from "../../utils/types"
import { HIDE_ORDER, SEND_ORDER, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS } from "../actions/order-details"

type TState = {
    orderRequest: boolean,
    orderFailed: boolean,
    popupVisible: boolean,
    order?: TOrderOptions
    // {
    //     createdAt: string,
    //     ingredients: TElement[],
    //     name: string,
    //     number: number,
    //     owner: {
    //         name: string,
    //         email: string,
    //         createdAt: string,
    //         updatedAt: string
    //     }
    //     price: number,
    //     status: string
    //     updatedAt: string
    //     _id: string
    // } | {}
}

const initialState = {
    orderRequest: false,
    orderFailed: false,
    popupVisible: false,
    order: undefined
}

export const orderDetailsReducer = (state: TState = initialState, action: any): TState => {
    switch (action.type) {
        case SEND_ORDER: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false
            }
        }
        case SEND_ORDER_SUCCESS: {
            console.log(action.order.order)
            return {
                ...state,
                orderRequest: false,
                order: action.order.order,
                popupVisible: true,

            }
        }
        case SEND_ORDER_FAILED: {
            return {
                ...state,
                orderFailed: true,
                orderRequest: false
            }
        }
        case HIDE_ORDER: {
            return {
                ...state,
                popupVisible: false
            }
        }
        default: {
            return state
        }
    }
}