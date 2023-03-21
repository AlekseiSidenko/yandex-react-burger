import React, { FC } from "react";
import orderStyles from "./order-details.module.css";
import orderDone from "../../images/done.jpg";
import { useAppSelector } from "../../hooks/hooks";


export const OrderDetails: FC = () => {
    const { order } = useAppSelector(state => state.orderDetails)
    return (
        <>
            <p className="text text_type_digits-large mt-30">{order?.number}</p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <img src={orderDone} alt="Иконка состояния готовности" className={orderStyles.done} />
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2 mb-30">Дождитесь готовности на орбитальной станции</p>
        </>
    )
}