import React, { FC } from "react";
import { OrderStatistics } from "../components/order-statistics/order-statistics";
import { Order } from "../components/order/order";
import { OrderList } from "../components/order-list/order-list";
import styles from "./styles.module.css"

export const FeedPage: FC = () => {
    return (
        <section className={styles.feed}>
            <p className="text text_type_main-large mb-5">Лента заказов</p>
            <div className={styles.main}>
                <OrderList/>
                <OrderStatistics/>
            </div>
        </section>
    )
}