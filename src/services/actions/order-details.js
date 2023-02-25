export const SEND_ORDER = "SEND_ORDER";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";
export const HIDE_ORDER = "HIDE_ORDER"

export const sendOrder = (ingridients) => {
    return function(dispatch) {
        dispatch({
            type: SEND_ORDER
          })
          fetch("https://norma.nomoreparties.space/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            ingredients: ingridients.map(ingridient => ingridient._id)
          })
        })
          .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
          .then (res => {
            if (res) {
                dispatch({
                    type: SEND_ORDER_SUCCESS,
                    order: res.order
                })
            } else {
                dispatch({
                    type: SEND_ORDER_FAILED
                })
            }
          }) .catch(err => {
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