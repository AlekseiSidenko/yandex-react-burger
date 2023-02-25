export const GET_BURGER_INGRIDIENTS = "GET_BURGER_INGRIDIENTS";
export const GET_BURGER_INGRIDIENTS_SUCCESS = "GET_BURGER_INGRIDIENTS_SUCCESS";
export const GET_BURGER_INGRIDIENTS_FAILED = "GET_BURGER_INGRIDIENTS_FAILED";

export const getIngridients = () => {
    return function(dispatch) {
        dispatch({
            type: GET_BURGER_INGRIDIENTS
          })
          fetch(`https://norma.nomoreparties.space/api/ingredients`)
          .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
          .then (res => {
            if (res) {
                dispatch({
                    type: GET_BURGER_INGRIDIENTS_SUCCESS,
                    ingridients: res.data
                })
            } else {
                dispatch({
                    type: GET_BURGER_INGRIDIENTS_FAILED
                })
            }
          }) .catch(err => {
            alert(err)
            dispatch({
                type: GET_BURGER_INGRIDIENTS_FAILED
            })
          })
}
}