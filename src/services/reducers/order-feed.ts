import { TOrderFeedActions } from '../actions/order-feed';
import { ORDER_FEED_CLOSE, ORDER_FEED_CLOSED, ORDER_FEED_ERROR, ORDER_FEED_GET_MESSAGE, ORDER_FEED_SUCCESS } from '../constants';
import { TOrderFeed } from '../types/data';

type TWSState = {
    wsConnected: boolean;
    orderFeed: TOrderFeed | null

    error?: Event;
}

const initialState = {
    wsConnected: false,
    orderFeed: null,
};

export const orderFeedReducer = (state: TWSState = initialState, action: TOrderFeedActions): TWSState => {
    switch (action.type) {
        case ORDER_FEED_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case ORDER_FEED_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case ORDER_FEED_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case ORDER_FEED_CLOSE:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case ORDER_FEED_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                orderFeed: action.payload
            };
        default:
            return state;
    }
};