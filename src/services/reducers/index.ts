import { combineReducers } from "redux";
import { constructorReducer } from "./burger-constructor";
import { orderDetailsReducer } from "./order-details";
import { userLoginReduser } from "./login";
import { userRegisterReduser } from "./register";
import { passwordResetReduser } from "./password-reset";
import { getTokenReduser } from "./forgot-password";
import { userInfoReduser } from "./profile";
import { logOutReduser } from "./logout";
import { ingredientsReducer } from "./burger-ingridients";
import { RefreshUserInfoReduser } from "./refresh-user";
import { orderFeedReducer } from "./order-feed";
import { orderHistoryReducer } from "./order-history";


export default combineReducers({
    ingredients: ingredientsReducer,
    elements: constructorReducer,
    orderDetails: orderDetailsReducer,
    userLogin: userLoginReduser,
    userRegister: userRegisterReduser,
    getToken: getTokenReduser,
    passwordReset: passwordResetReduser,
    userInfo: userInfoReduser,
    logOutSucces: logOutReduser,
    refreshUser: RefreshUserInfoReduser,
    feedSocket: orderFeedReducer,
    historySocket: orderHistoryReducer
})