import { GET_BURGER_INGRIDIENTS, GET_BURGER_INGRIDIENTS_SUCCESS, GET_BURGER_INGRIDIENTS_FAILED, INCREACE_INGRIDIENT_COUNTER } from "../actions/burger-ingridients";

const initialState = {
    ingridientsRequest: false,
    ingridientsFailed: false,
    ingridients: []
}

export const ingridientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BURGER_INGRIDIENTS : {
            return {
                ...state,
                ingridientsRequest: true,
                ingridientsFailed: false
            };
        }
        case GET_BURGER_INGRIDIENTS_SUCCESS : {
            return {
                ...state,
                ingridients: action.ingridients,
                ingridientsRequest: false
            };
        }
        case GET_BURGER_INGRIDIENTS_FAILED : {
            return {
                ...state,
                ingridientsFailed: true,
                ingridientsRequest: false
            };
        }
        default: {
            return state
        }
    }
}