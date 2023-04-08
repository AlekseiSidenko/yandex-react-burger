import React, { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import orderStyles from './order-info.module.css';
import { SmallIngredient } from "../small-ingredient/small-ingredient";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TElement, TOrderFeedOptions } from "../../services/types/data";
import { orderFeedClose, orderFeedStart } from "../../services/actions/order-feed";
import { getCookie } from "../../utils/cookie";
import { orderHistoryClose, orderHistoryStart } from "../../services/actions/order-history";
import { baseWsURL } from "../../utils/constants";

export const OrderInfo: FC = () => {
    const { ingredients } = useAppSelector(state => state.ingredients)
    const { orderFeed } = useAppSelector(state => state.feedSocket)
    const { orderHistory } = useAppSelector(state => state.historySocket)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const { feedId, orderId } = useParams()
    const navigate = useNavigate()
    let totalPrice: number = 0
    let data: TOrderFeedOptions = null!
    let orderIngredients: TElement[] = []
    let orderDate: Date | null = null
    let dataReduce: { [key: string]: number } = {}


    React.useEffect(() => {
        if (!orderFeed && feedId) {
            console.log('connect')
            dispatch(orderFeedStart(`${baseWsURL}/all`))
            return () => {
                dispatch(orderFeedClose('closed by client'))
            }
        }
        if (!orderHistory && orderId) {
            dispatch(orderHistoryStart(`${baseWsURL}?token=${getCookie('token')}`))
            return () => {
                dispatch(orderHistoryClose('closed by client'))
            }
        }
    }, [])

    if (orderFeed && orderFeed.orders.length) {
        orderFeed.orders.forEach((order, index) => {
            if (order._id === feedId) {
                data = order
                orderDate = new Date(data.createdAt)
                dataReduce = data.ingredients.reduce((acc: { [key: string]: number }, el) => {
                    acc[el] = (acc[el] || 0) + 1
                    return acc
                }, {})
            } if (index + 1 === orderFeed.orders.length && data === null) {
                return navigate("/*", { replace: true })
            }
        })
    }

    if (orderHistory && orderHistory.orders.length) {
        orderHistory.orders.forEach((order, index) => {
            if (order._id === orderId) {
                data = order
                orderDate = new Date(data.createdAt)
                dataReduce = data.ingredients.reduce((acc: { [key: string]: number }, el) => {
                    acc[el] = (acc[el] || 0) + 1
                    return acc
                }, {})
            } if (index + 1 === orderHistory.orders.length && data === null) {
                return navigate("/*", { replace: true })
            }
        })
    }

    if (dataReduce && ingredients && ingredients.length) {
        for (let key in dataReduce) {
            ingredients.forEach((element) => {
                if (element._id === key) {
                    if (element.type === 'bun') {
                        totalPrice = totalPrice + (element.price * 2)
                        orderIngredients = [...orderIngredients, element]
                    } else {
                        totalPrice = totalPrice + element.price
                        element.__v = dataReduce[key]
                        orderIngredients = [...orderIngredients, element]
                    }
                }
            })
        }
    }

    return (
        data !== null ?
            <div className={orderStyles.info}>
                {!location.state &&
                    <div className={orderStyles.number}>
                        <p className="text text_type_digits-default mt-6">#{data.number}</p>
                    </div>
                }
                <div className={orderStyles.description}>
                    <p className="text text_type_main-medium mt-10">{data.name}</p>
                    {data.status === "created" &&
                        <p className="text text_type_main-default mt-2">
                            Создан
                        </p>
                    }
                    {data.status === "pending" &&
                        <p className="text text_type_main-default mt-2">
                            Готовится
                        </p>
                    }
                    {data.status === 'done' &&
                        <div className={orderStyles.done}>
                            <p className="text text_type_main-default mt-2">
                                Выполнен
                            </p>
                        </div>
                    }
                    <p className="text text_type_main-medium mt-15 mb-6">
                        Состав:
                    </p>
                </div>
                <ul className={orderStyles.ingredients}>
                    {orderIngredients.map(ingredient => {
                        if (ingredient.type === 'bun') {
                            return (
                                <li key={ingredient._id} className={orderStyles.ingredient}>
                                    <div className={orderStyles.picture}>
                                        <SmallIngredient ingredient={ingredient} />
                                        <p className="text text_type_main-default ml-4">{ingredient.name}</p>
                                    </div>
                                    <div className={orderStyles.price}>
                                        <p className="text text_type_digits-default mr-2">2 x {ingredient.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                </li>
                            )
                        } else {
                            return (
                                <li key={ingredient._id} className={orderStyles.ingredient}>
                                    <div className={orderStyles.picture}>
                                        <SmallIngredient ingredient={ingredient} />
                                        <p className="text text_type_main-default ml-4">{ingredient.name}</p>
                                    </div>
                                    <div className={orderStyles.price}>
                                        <p className="text text_type_digits-default mr-2">{ingredient.__v} x {ingredient.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
                <div className={orderStyles.footer}>
                    {orderDate &&
                        <p className="text text_type_main-default text_color_inactive mt-10 mb-10">
                            <FormattedDate date={orderDate} />
                        </p>}
                    <div className={orderStyles.price}>
                        <p className="text text_type_digits-default mr-2">{totalPrice}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
            :
            <p className="text text_type_main-large mt-10 mb-10">
                Загрузка...
            </p>
    )
}