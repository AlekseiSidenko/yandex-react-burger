import { config, fetchWithRefresh } from "../../utils/api";
import { CLEAN_CONSTRUCTOR } from "./burger-constructor";

export const SEND_ORDER = "SEND_ORDER";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";
export const HIDE_ORDER = "HIDE_ORDER"

export const sendOrder = (ingredients, token) => {
  return function (dispatch) {
    dispatch({
      type: SEND_ORDER
    })
    fetchWithRefresh(`${config.baseUrl}/orders`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + `${token}`
      },
      body: JSON.stringify({
        ingredients: ingredients.map(ingredient => ingredient._id)
      })
    })
      .then(res => {
        if (res) {
          dispatch({
            type: SEND_ORDER_SUCCESS,
            order: res.order,
          })
        }
      })
      .then(() => {
        dispatch({
          type: CLEAN_CONSTRUCTOR
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: SEND_ORDER_FAILED
        })
      })
  }
}

export const hideOrder = () => {
  return {
    type: HIDE_ORDER
  }
}