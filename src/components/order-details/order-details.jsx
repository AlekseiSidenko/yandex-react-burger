import React from "react";
import PropTypes from 'prop-types';
import Modal from "../modal/modal";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import orderStyles from "./order-details.module.css"
import orderDone  from "../../images/done.jpg";

export default function OrderDetails() {
    
    return(
        <>
            <p className="text text_type_digits-large mt-30">034536</p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <img src={orderDone} alt="Иконка состояния готовности" className={orderStyles.done} />
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2 mb-30">Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

OrderDetails.propTypes = {
    handleClose: PropTypes.func.isRequired
}