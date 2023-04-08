import React, { FC, ReactNode } from "react";
import { useAppSelector } from "../../hooks/hooks";
import statisticsStyle from './order-statistics.module.css'

export const OrderStatistics = () => {

    const { orderFeed } = useAppSelector(state => state.feedSocket)

    return (
        orderFeed && orderFeed?.success ?
            <div className={statisticsStyle.statistics}>
                <div className={statisticsStyle.status}>
                    <div className={statisticsStyle.ready}>
                        <p className="text text_type_main-medium mb-4">Готовы:</p>
                        <div className={statisticsStyle.ready_nubmers}>
                            {
                                orderFeed?.orders.map((order, index) => {
                                    if (order.status === 'done' && index < 20) {
                                        return <p key={index} className="text text_type_digits-default mt-2 mr-15">{order.number}</p>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className={statisticsStyle.in_work}>
                        <p className="text text_type_main-medium mb-4">В работе:</p>
                        <div className={statisticsStyle.in_work_nubmers}>
                            {
                                orderFeed?.orders.map((order, index) => {
                                    if (order.status === 'pending' && index < 20) {
                                        return <p key={index} className="text text_type_digits-default mt-2 mr-15">{order.number}</p>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <p className="text text_type_main-medium mt-15">Выполнено за все время:</p>
                <p className="text text_type_digits-large">{orderFeed?.total}</p>
                <p className="text text_type_main-medium mt-15">Выполнено за сегодня:</p>
                <p className="text text_type_digits-large">{orderFeed?.totalToday}</p>
            </div>
            :
            <></>
    )
}