import React, { FC } from "react";
import { Order } from "../order/order";
import listStyles from './order-list.module.css'

export const OrderList: FC = () => {
    return (
        <ul className={listStyles.list}>
            <li className={listStyles.item}>
                <Order />
            </li>
            <li className={listStyles.item}>
                <Order />
            </li>
            <li className={listStyles.item}>
                <Order />
            </li>
            <li className={listStyles.item}>
                <Order />
            </li>
            <li className={listStyles.item}>
                <Order />
            </li>
            <li className={listStyles.item}>
                <Order />
            </li>
        </ul>
    )
}