export const SHOW_INGRIDIENT_DETAILS = "SHOW_INGRIDIENT_DETAILS";
export const HIDE_INGRIDIENT_DETAILS = "HIDE_INGRIDIENT_DETAILS";

export const showIngeidient = (data) => {
    return {
        type: SHOW_INGRIDIENT_DETAILS,
        payload : {
            data
        }
    }
}

export const hideIngridient = () => {
    return {
        type: HIDE_INGRIDIENT_DETAILS
    }
}