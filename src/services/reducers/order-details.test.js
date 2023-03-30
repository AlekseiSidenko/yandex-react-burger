import * as types from "../constants"
import { orderDetailsReducer } from "./order-details"

describe('order details reducer', () => {
    it('should return the initial state', () => {
        expect(orderDetailsReducer(undefined, {})).toEqual(
            {
                orderRequest: false,
                orderFailed: false,
                popupVisible: false,
                order: undefined
            }
        )
    })
    it('start request order details', () => {
        expect(orderDetailsReducer(
            {
                orderRequest: false,
                orderFailed: false,
                popupVisible: false,
                order: undefined
            },
            {
                type: types.SEND_ORDER
            }
        )).toEqual(
            {
                orderRequest: true,
                orderFailed: false,
                popupVisible: false,
                order: undefined
            }
        )
    })
    it('request order details success', () => {
        expect(orderDetailsReducer(
            {
                orderRequest: true,
                orderFailed: false,
                popupVisible: false,
                order: undefined
            },
            {
                type: types.SEND_ORDER_SUCCESS,
                order: {
                    success: true,
                    name: "Space флюоресцентный бургер",
                    order: {
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
                        ],
                        _id: "642573510905fd001b624cf6",
                        owner: {
                            name: "Test",
                            email: "test@ya.ru",
                            createdAt: "2023-03-07T08:29:29.966Z",
                            updatedAt: "2023-03-20T09:45:19.438Z"
                        },
                        status: "done",
                        name: "Space spicy флюоресцентный антарианский бургер",
                        createdAt: "2023-03-30T11:32:33.318Z",
                        updatedAt: "2023-03-30T11:32:33.775Z",
                        number: 46801,
                        price: 1068
                    }
                }
            }
        )).toEqual(
            {
                orderRequest: false,
                orderFailed: false,
                popupVisible: true,
                order: {
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
                    ],
                    _id: "642573510905fd001b624cf6",
                    owner: {
                        name: "Test",
                        email: "test@ya.ru",
                        createdAt: "2023-03-07T08:29:29.966Z",
                        updatedAt: "2023-03-20T09:45:19.438Z"
                    },
                    status: "done",
                    name: "Space spicy флюоресцентный антарианский бургер",
                    createdAt: "2023-03-30T11:32:33.318Z",
                    updatedAt: "2023-03-30T11:32:33.775Z",
                    number: 46801,
                    price: 1068
                }
            }
        )
    })
    it('request order details false', () => {
        expect(orderDetailsReducer(
            {
                orderRequest: true,
                orderFailed: false,
                popupVisible: false,
                order: undefined
            },
            {
                type: types.SEND_ORDER_FAILED,
            }
        )).toEqual(
            {
                orderRequest: false,
                orderFailed: true,
                popupVisible: false,
                order: undefined
            }
        )
    })
    it('order details hide order', () => {
        expect(orderDetailsReducer(
            {
                orderRequest: true,
                orderFailed: false,
                popupVisible: true,
                order: {
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
                    ],
                    _id: "642573510905fd001b624cf6",
                    owner: {
                        name: "Test",
                        email: "test@ya.ru",
                        createdAt: "2023-03-07T08:29:29.966Z",
                        updatedAt: "2023-03-20T09:45:19.438Z"
                    },
                    status: "done",
                    name: "Space spicy флюоресцентный антарианский бургер",
                    createdAt: "2023-03-30T11:32:33.318Z",
                    updatedAt: "2023-03-30T11:32:33.775Z",
                    number: 46801,
                    price: 1068
                }
            },
            {
                type: types.HIDE_ORDER
            }
        )).toEqual({
            orderRequest: false,
            orderFailed: false,
            popupVisible: false,
            order: undefined
        })
    })
})