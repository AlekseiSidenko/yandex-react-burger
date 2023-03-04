import { combineReducers } from "redux";
import { ingridientsReducer } from "./burger-ingridients";
import { constructorReducer } from "./burger-constructor";
import { ingridientDetailsReduser } from "./ingridient-details";
import { orderDetailsReducer } from "./order-details";


export default combineReducers({
    ingridients: ingridientsReducer,
    elements: constructorReducer,
    ingridientDetails: ingridientDetailsReduser,
    orderDetails: orderDetailsReducer
})