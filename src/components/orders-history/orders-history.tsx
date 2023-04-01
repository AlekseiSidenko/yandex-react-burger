import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { orderHistoryClose, orderHistoryStart } from "../../services/actions/order-history";
import { getCookie } from "../../utils/cookie";
import { Order } from "../order/order";
import historyStyles from './orders-history.module.css'
import { baseWsURL } from "../../utils/constants";

export const OrdersHistory: FC = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { orderHistory } = useAppSelector(state => state.historySocket)

    React.useEffect(() => {
        dispatch(orderHistoryStart(`${baseWsURL}?token=${getCookie('token')}`))
        return () => {
            dispatch(orderHistoryClose('closed by client'))
        }
    }, [])

    return (
        orderHistory ?
        <ul className={historyStyles.list}>
            {orderHistory.orders.reverse().map(order => {
                return (
                    <Link
                        to={`/profile/orders/${order._id}`}
                        state={{ background: location, orderNumber: order.number}}
                        className={historyStyles.link}
                        key={order._id}
                        >
                        <li className={historyStyles.item}>
                            <Order order={order} status={true}/>
                        </li>
                    </Link>
                )
            })
            }
        </ul>
        :
        <></>
    )
}