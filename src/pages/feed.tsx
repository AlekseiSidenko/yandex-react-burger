import React, { FC } from "react";
import { OrderStatistics } from "../components/order-statistics/order-statistics";
import { OrderList } from "../components/order-list/order-list";
import styles from "./styles.module.css"
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { orderFeedClose, orderFeedStart } from "../services/actions/order-feed";

export const FeedPage: FC = () => {
    const dispatch = useAppDispatch()
    const { orderFeed } = useAppSelector(state => state.feedSocket)

    React.useEffect(() => {
        dispatch(orderFeedStart('wss://norma.nomoreparties.space/orders/all'))
        return () => {
            dispatch(orderFeedClose('closed by client'))
        }
    }, [])

    return (
        <section className={styles.feed}>
            <p className="text text_type_main-large mb-5">Лента заказов</p>
            <div className={styles.main}>
                {orderFeed ?
                    <>
                        <OrderList />
                        <OrderStatistics/>
                    </>
                    :
                    <></>
                }
            </div>
        </section>
    )
}