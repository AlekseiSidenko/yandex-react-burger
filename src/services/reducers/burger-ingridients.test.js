import { ingredientsReducer } from "./burger-ingridients"
import * as types from "../constants"



describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(
            {
                ingredientsRequest: false,
                ingredientsFailed: false,
                ingredients: []
            }
        )
    })
    it('start ingredients request', () => {
        expect(ingredientsReducer(
            {
                ingredientsRequest: false,
                ingredientsFailed: false,
                ingredients: []
            },
            {
                type: types.GET_BURGER_INGREDIENTS
            }
        )).toEqual(
            {
                ingredientsRequest: true,
                ingredientsFailed: false,
                ingredients: []
            }
        )
    })
    it('request ingredients success', () => {
        expect(ingredientsReducer(
            {
                ingredientsRequest: true,
                ingredientsFailed: false,
                ingredients: []
            },
            {
                type: types.GET_BURGER_INGREDIENTS_SUCCESS,
                ingredients: {
                    success: true,
                    data: [
                        {
                            calories: 643,
                            carbohydrates: 85,
                            fat: 26,
                            image: "https://code.s3.yandex.net/react/code/bun-01.png",
                            image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                            image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                            name: "Флюоресцентная булка R2-D3",
                            price: 988,
                            proteins: 44,
                            type: "bun",
                            __v: 0,
                            _id: "60d3b41abdacab0026a733c7",
                        },
                        {
                            _id: "60d3b41abdacab0026a733cd",
                            name: "Соус фирменный Space Sauce",
                            type: "sauce",
                            proteins: 50,
                            fat: 22,
                            carbohydrates: 11,
                            calories: 14,
                            price: 80,
                            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                            __v: 0,
                        },
                        {
                            _id: "60d3b41abdacab0026a733c9",
                            name: "Мясо бессмертных моллюсков Protostomia",
                            type: "main",
                            proteins: 433,
                            fat: 244,
                            carbohydrates: 33,
                            calories: 420,
                            price: 1337,
                            image: "https://code.s3.yandex.net/react/code/meat-02.png",
                            image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
                            image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
                            __v: 0
                        }
                    ]
                }
            }
        )).toEqual(
            {
                ingredientsRequest: false,
                ingredientsFailed: false,
                ingredients: [
                    {
                        calories: 643,
                        carbohydrates: 85,
                        fat: 26,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        name: "Флюоресцентная булка R2-D3",
                        price: 988,
                        proteins: 44,
                        type: "bun",
                        __v: 0,
                        _id: "60d3b41abdacab0026a733c7",
                    },
                    {
                        _id: "60d3b41abdacab0026a733cd",
                        name: "Соус фирменный Space Sauce",
                        type: "sauce",
                        proteins: 50,
                        fat: 22,
                        carbohydrates: 11,
                        calories: 14,
                        price: 80,
                        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                        __v: 0,
                    },
                    {
                        _id: "60d3b41abdacab0026a733c9",
                        name: "Мясо бессмертных моллюсков Protostomia",
                        type: "main",
                        proteins: 433,
                        fat: 244,
                        carbohydrates: 33,
                        calories: 420,
                        price: 1337,
                        image: "https://code.s3.yandex.net/react/code/meat-02.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
                        __v: 0
                    }
                ]
            }
        )
    })
    it('false ingredients request', () => {
        expect(ingredientsReducer(
            {
                ingredientsRequest: true,
                ingredientsFailed: false,
                ingredients: []
            },
            {
                type: types.GET_BURGER_INGREDIENTS_FAILED
            }
        )).toEqual(
            {
                ingredientsRequest: false,
                ingredientsFailed: true,
                ingredients: []
            }
        )
    })
})