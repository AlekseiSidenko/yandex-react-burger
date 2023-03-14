import { combineReducers } from "redux";
import { ingridientsReducer } from "./burger-ingridients";
import { constructorReducer } from "./burger-constructor";
import { ingridientDetailsReduser } from "./ingridient-details";
import { orderDetailsReducer } from "./order-details";
import { userLoginReduser } from "./login";
import { userRegisterReduser } from "./register";
import { passwordResetReduser } from "./password-reset";
import { getTokenReduser } from "./forgot-password";
import { userInfoReduser } from "./profile";
import { logOutReduser } from "./logout";


export default combineReducers({
    ingridients: ingridientsReducer,
    elements: constructorReducer,
    ingridientDetails: ingridientDetailsReduser,
    orderDetails: orderDetailsReducer,
    userLogin: userLoginReduser,
    userRegister: userRegisterReduser,
    getToken: getTokenReduser,
    passwordReset: passwordResetReduser,
    userInfo: userInfoReduser,
    logOutSucces: logOutReduser
})