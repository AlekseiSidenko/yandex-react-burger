import { ingredientsReducer } from "./burger-ingridients"
import { ingredientsInitialState } from "./burger-ingridients"
import * as types from "../constants"
import { bunR2D3, main, sauce } from "./burger-constructor.test"



describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(ingredientsInitialState)
    })

    it('start ingredients request', () => {
        expect(ingredientsReducer(ingredientsInitialState,
            {
                type: types.GET_BURGER_INGREDIENTS
            }
        )).toEqual({
            ...ingredientsInitialState,
            ingredientsRequest: true,
        })
    })

    it('request ingredients success', () => {
        expect(ingredientsReducer(
            {
                ...ingredientsInitialState,
                ingredientsRequest: true,
            },
            {
                type: types.GET_BURGER_INGREDIENTS_SUCCESS,
                ingredients: {
                    success: true,
                    data: [
                        bunR2D3,
                        sauce,
                        main
                    ]
                }
            }
        )).toEqual({
            ...ingredientsInitialState,
            ingredients: [
                bunR2D3,
                sauce,
                main
            ]
        })
    })

    it('false ingredients request', () => {
        expect(ingredientsReducer(
            {
                ...ingredientsInitialState,
                ingredientsRequest: true,
            },
            {
                type: types.GET_BURGER_INGREDIENTS_FAILED
            }
        )).toEqual({
            ...ingredientsInitialState,
            ingredientsFailed: true,
        })
    })
})