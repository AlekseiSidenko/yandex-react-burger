import { TElement } from "../types/data";
import { TBurgerConstructorActions } from "../actions/burger-constructor";
import { ADD_INGREDIENT, REMOVE_INGREDIENT, MOVE_INGREDIENT, CLEAN_CONSTRUCTOR } from "../constants";


type TState = {
    draggedElements: TElement[],
    bunsPrice: number,
    elementsPrice: number
}

export const constructorInitialState: TState = {
    draggedElements: [],
    bunsPrice: 0,
    elementsPrice: 0
}

export const constructorReducer = (state = constructorInitialState, action: TBurgerConstructorActions): TState => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            const element = { ...action.payload.item, uid: action.payload.uid }
            if (element.type === 'bun') {
                return {
                    ...state,
                    draggedElements: [...state.draggedElements.filter(bun => bun.type !== 'bun'), element],
                    bunsPrice: element.price * 2
                }
            } else {
                return {
                    ...state,
                    draggedElements: [...state.draggedElements, element],
                    elementsPrice: state.elementsPrice + element.price
                }
            }
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                draggedElements: [...state.draggedElements.filter(element => element.uid !== action.payload.uid)],
                elementsPrice: state.elementsPrice - action.payload.price
            }
        }
        case MOVE_INGREDIENT: {
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
        case CLEAN_CONSTRUCTOR: {
            return {
                draggedElements: [],
                bunsPrice: 0,
                elementsPrice: 0
            }
        }
        default: {
            return state
        }
    }
}