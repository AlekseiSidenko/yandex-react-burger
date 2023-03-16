import { HIDE_ORDER, SEND_ORDER, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS } from "../actions/order-details"

const initialState = {
    orderRequest: false,
    orderFailed: false,
    popupVisible: false,
    order: []
}

export const orderDetailsReducer = (state = initialState, action) => {
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
                order: action.order,
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