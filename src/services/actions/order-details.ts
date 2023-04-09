import { config, fetchWithRefresh } from "../../utils/api";
import { TElement, TOrder } from "../types/data";
import { AppThunk } from "../store";
import { SEND_ORDER, SEND_ORDER_SUCCESS, SEND_ORDER_FAILED, HIDE_ORDER, CLEAN_CONSTRUCTOR } from "../constants";

export interface ISendOrder {
  readonly type: typeof SEND_ORDER
}

export interface ISendOrderSuccess {
  readonly type: typeof SEND_ORDER_SUCCESS
  order: TOrder
}

export interface ISendOrderFailed {
  readonly type: typeof SEND_ORDER_FAILED
}

export interface IHideOrder {
  readonly type: typeof HIDE_ORDER
}

export type TOrderDetailsActions =
  | ISendOrder
  | ISendOrderSuccess
  | ISendOrderFailed
  | IHideOrder;

export const sendOrder = (ingredients: TElement[], token: string): AppThunk => (dispatch) => {
  dispatch({
    type: SEND_ORDER
  })
  fetchWithRefresh<TOrder>(`${config.baseUrl}/orders`, {
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
          order: res,
        })
      }
    })
    .then(() => {
      dispatch({
        type: CLEAN_CONSTRUCTOR
      })
    })
    .catch(err => {
      alert(err.message)
      dispatch({
        type: SEND_ORDER_FAILED
      })
    })
}

export const hideOrder = () => {
  return {
    type: HIDE_ORDER
  }
}