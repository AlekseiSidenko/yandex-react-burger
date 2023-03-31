import React, { FC, useDeferredValue } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { Order } from "../order/order";
import listStyles from './order-list.module.css'

export const OrderList = () => {
    const location = useLocation()
    const { orderFeed } = useAppSelector(state => state.feedSocket)
    const defferedValue = useDeferredValue(orderFeed)

    return (
        <ul className={listStyles.list}>
            {orderFeed?.orders.map(order => {
                return (
                    <Link
                        key={order._id}
                        to={`/feed/${order._id}`}
                        state={{ background: location, orderNumber: order.number }}
                        className={listStyles.link}>
                        <li className={listStyles.item}>
                            <Order order={order} />
                        </li>
                    </Link>
                )
            })
            }
        </ul>
    )
}