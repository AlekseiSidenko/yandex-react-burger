import { TOrderOptions } from "../types/data"
import { SEND_ORDER, SEND_ORDER_SUCCESS, SEND_ORDER_FAILED, HIDE_ORDER } from "../constants";
import { TOrderDetailsActions } from "../actions/order-details";

type TState = {
    orderRequest: boolean,
    orderFailed: boolean,
    popupVisible: boolean,
    order?: TOrderOptions
}

const initialState = {
    orderRequest: false,
    orderFailed: false,
    popupVisible: false,
    order: undefined
}

export const orderDetailsReducer = (state: TState = initialState, action: TOrderDetailsActions): TState => {
    switch (action.type) {
        case SEND_ORDER: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false
            }
        }
        case SEND_ORDER_SUCCESS: {
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