export const ADD_INGRIDIENT = "ADD_INGRIDIENT"
export const REMOVE_INGRIDIENT = "REMOVE_INGRIDIENT"
export const MOVE_INGRIDIENT = "MOVE_INGRIDIENT"
export const CHECK_TOTAL_PRICE = "CHECK_TOTAL_PRICE"

export const addIngridient = (item) => {
    return {
        type: ADD_INGRIDIENT,
        payload: {
            item
        }
    }
}

export const deleteIngridient = (uid, price) => {
    return {
        type: REMOVE_INGRIDIENT,
        payload: {
            uid,
            price
        }
    }
}

export const moveIngridient = (dragIndex, hoverIndex) => {
    return {
        type: MOVE_INGRIDIENT,
        payload: {
            dragIndex,
            hoverIndex
        }
    }
}

export const checkTotalPrice = () => {
    return {
        type: CHECK_TOTAL_PRICE,
    }
}
