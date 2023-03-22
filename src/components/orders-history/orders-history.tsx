import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Order } from "../order/order";
import historyStyles from './orders-history.module.css'

export const OrdersHistory: FC = () => {
    const location = useLocation()

    return (
        <ul className={historyStyles.list}>
            <Link 
            to={`/profile/orders/test`}
            state={{ background: location }} 
            className={historyStyles.link}>
            <li className={historyStyles.item}>
                <Order/>
            </li>
            </Link>
            <li className={historyStyles.item}>
                <Order/>
            </li>
            <li className={historyStyles.item}>
                <Order/>
            </li>
            <li className={historyStyles.item}>
                <Order/>
            </li>
            <li className={historyStyles.item}>
                <Order/>
            </li>
            <li className={historyStyles.item}>
                <Order/>
            </li>
        </ul>
    )
}