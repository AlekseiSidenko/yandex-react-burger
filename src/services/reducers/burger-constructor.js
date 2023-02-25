import { ADD_INGRIDIENT, MOVE_INGRIDIENT, REMOVE_INGRIDIENT } from "../actions/burger-constructor";
import uuid from 'react-uuid'

const initialState = {
    draggedElements: [],
    bunsPrice: 0,
    elementsPrice: 0
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGRIDIENT: {
            const element = {...action.payload.item, uid: uuid()}
            if (element.type === 'bun') {
        return {
            ...state,
            draggedElements: [...state.draggedElements.filter(bun => bun.type !== 'bun'), element],
            bunsPrice: element.price * 2
        }} else {
            return {
                ...state,
                draggedElements: [...state.draggedElements, element],
                elementsPrice: state.elementsPrice + element.price
            }
        }
    }
        case REMOVE_INGRIDIENT: {
            return {
                ...state,
                draggedElements: [...state.draggedElements.filter(element => element.uid !== action.payload.uid)],
                elementsPrice: state.elementsPrice - action.payload.price
            }
        }
        case MOVE_INGRIDIENT: {
            const dragIndex = action.payload.dragIndex
            const hoverIndex = action.payload.hoverIndex
            const dragElement = state.draggedElements[dragIndex]
            const newState = [...state.draggedElements]
            newState.splice(dragIndex, 1)
            newState.splice(hoverIndex, 0, dragElement)
            return {
                ...state,
                draggedElements: [...newState]
            }
        }
        default: {
            return state
        }
    }
}