import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TBurgerConstructorActions } from "./actions/burger-constructor";
import { TProfileActions } from "./actions/profile";
import { TGetBurgeIngredientsActions } from "./actions/burger-ingredients";
import { TForgotPasswordActions } from "./actions/forgot-password";
import { TUserLoginActions } from "./actions/login";
import { TlogOutActions } from "./actions/logout";
import { TOrderDetailsActions } from "./actions/order-details";
import { TPasswordResetActions } from "./actions/password-reset";
import { TRefreshUserActions } from "./actions/refresh-user";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { orderFeedActions, TOrderFeedActions } from "./actions/order-feed";
import { orderHistoryActions, TOrderHistoryActions } from "./actions/order-history";
import { TRegisterActions } from "./actions/register";


const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(thunk, 
        socketMiddleware(orderFeedActions),
        socketMiddleware(orderHistoryActions))))


export default store


export type TApplicationActions = 
| TWsApplicationActions
| TBurgerConstructorActions 
| TGetBurgeIngredientsActions
| TForgotPasswordActions
| TUserLoginActions
| TlogOutActions
| TOrderDetailsActions
| TPasswordResetActions
| TProfileActions
| TRefreshUserActions
| TRegisterActions


export type TWsApplicationActions = 
| TOrderFeedActions
| TOrderHistoryActions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
// export type AppThunk<TReturn = void> = ThunkAction<TReturn, Action, RootState, TApplicationActions>
export type AppThunk<TReturn = void> = ThunkAction<TReturn, RootState, unknown, TApplicationActions>