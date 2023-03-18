import React, { FC } from "react";
import { useSelector } from 'react-redux';
import constructorStyles from "./burger-constructor.module.css"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { OrderDetails } from "../order-details/order-details";
import Currency from "../../images/Currency.svg";
import { Modal } from "../modal/modal";
import { useDrop } from "react-dnd";
import { BurgerConstructorElement } from "../burger-constructor-element/burger-constructor-element";
import { addIngredient } from "../../services/actions/burger-constructor";
import { hideOrder, sendOrder } from "../../services/actions/order-details";
import { useNavigate } from "react-router-dom"
import { getCookie } from "../../utils/cookie";
import { IRootState } from "../../services/store";
import { TStateElements, TStateOrder } from "../../utils/types";
import { useAppDispatch } from "../../hooks/hooks";


export default function BurgerConstructor () {

    const { draggedElements, bunsPrice, elementsPrice } = useSelector<IRootState, TStateElements>((state) => state.elements)
    const { popupVisible, orderRequest } = useSelector<IRootState, TStateOrder>(state => state.orderDetails)
    const authChecked = useSelector<IRootState, boolean>(state => state.userInfo.authChecked)
    const isLoggedIn = !!useSelector<IRootState, boolean>(state => state.userInfo.userInfo)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    let token: any = getCookie('token')

    function handleClosePopup() {
        dispatch(hideOrder())
    }
    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            dispatch(addIngredient(item));
        }
    })
    const orderIt = () => {
        (console.log('клик сработал'))
        if (authChecked && isLoggedIn) {
            return dispatch(sendOrder(draggedElements, token))
        } else {
            return navigate('/login')
        }
    }

    return (
        <section ref={dropTarget} className={constructorStyles.main}>
            <ul className={constructorStyles.list}>
                {draggedElements.map((item, index) =>
                    item.type === 'bun' &&
                    <BurgerConstructorElement key={item.uid + 'top'} index={index} element={item} topOrBottom={"top"} extraName={' (верх)'} />)}
                <ul className={constructorStyles.filling}>
                    {draggedElements.map((item, index) =>
                        item.type !== 'bun' &&
                        <BurgerConstructorElement key={item.uid} index={index} element={item} />)}
                </ul>
                {draggedElements.map((item, index) =>
                    item.type === 'bun' &&
                    <BurgerConstructorElement key={item.uid + 'bottom'} index={index} element={item} topOrBottom={"bottom"} extraName={' (низ)'} />)}
            </ul>
            <div className={constructorStyles.order}>
                <p className="text text_type_digits-medium">{bunsPrice + elementsPrice}</p>
                <img src={Currency} alt="Иконка текущей валюты" className={constructorStyles.currency} />
                <Button onClick={() => orderIt()} disabled={draggedElements.length ? false : true} htmlType="button" type="primary" size="large" extraClass="ml-10">Оформить заказ</Button>
            </div>
            {orderRequest &&
                <Modal handleClose={handleClosePopup}>
                    <p className="text text_type_main-large mt-10 mb-10">
                        Отправляю заказ...
                    </p>
                </Modal>
            }
            {popupVisible &&
                <Modal handleClose={handleClosePopup}>
                    <OrderDetails />
                </Modal>}
        </section>
    )
}