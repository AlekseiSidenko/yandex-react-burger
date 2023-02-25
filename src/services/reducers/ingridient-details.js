import { HIDE_INGRIDIENT_DETAILS, SHOW_INGRIDIENT_DETAILS } from "../actions/ingridient-details"

const initialState = ({
    visible: false,
    data: []
})

export const ingridientDetailsReduser = (state=initialState, action) => {
    switch(action.type) {
        case SHOW_INGRIDIENT_DETAILS: {
            return {
                visible: true,
                data: action.payload.data,
            }
        }
        case HIDE_INGRIDIENT_DETAILS: {
            return {
                visible: false,
                data: []
            }
        }
        default: {
            return state
        }
    }
}