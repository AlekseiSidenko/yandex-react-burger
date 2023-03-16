import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import constructorStyles from "./burger-constructor.module.css"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import OrderDetails from "../order-details/order-details";
import Currency from "../../images/Currency.svg";
import Modal from "../modal/modal";
import { useDrop } from "react-dnd";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import { addIngredient } from "../../services/actions/burger-constructor";
import { hideOrder, sendOrder } from "../../services/actions/order-details";
import { useNavigate } from "react-router-dom"
import { getCookie } from "../../utils/cookie";

export default function BurgerConstructor() {

    const { draggedElements, bunsPrice, elementsPrice } = useSelector((state) => state.elements)
    const { popupVisible, orderRequest } = useSelector(state => state.orderDetails)
    const authChecked = useSelector(state => state.userInfo.authChecked)
    const isLoggedIn = !!useSelector(state => state.userInfo.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleClosePopup() {
        dispatch(hideOrder())
    }
    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            dispatch(addIngredient(item));
        }
    })
    const orderIt = (draggedElements) => {
        if (authChecked && isLoggedIn) {
            dispatch(sendOrder(draggedElements, getCookie('token')))
        } else {
            navigate('/login')
        }
    }

    return (
        <section ref={dropTarget} className={constructorStyles.constructor}>
            <ul className={constructorStyles.list}>
                {draggedElements.map((item) =>
                    item.type === 'bun' &&
                    <BurgerConstructorElement key={item.uid + 'top'} element={item} topOrBottom={"top"} extraName={' (верх)'} />)}
                <ul className={constructorStyles.filling}>
                    {draggedElements.map((item, index) =>
                        item.type !== 'bun' &&
                        <BurgerConstructorElement key={item.uid} index={index} element={item} />)}
                </ul>
                {draggedElements.map((item) =>
                    item.type === 'bun' &&
                    <BurgerConstructorElement key={item.uid + 'bottom'} element={item} topOrBottom={"bottom"} extraName={' (низ)'} />)}
            </ul>
            <div className={constructorStyles.order}>
                <p className="text text_type_digits-medium">{bunsPrice + elementsPrice}</p>
                <img src={Currency} alt="Иконка текущей валюты" className={constructorStyles.currency} />
                <Button onClick={() => orderIt(draggedElements, getCookie('token'))} disabled={draggedElements.length ? false : true} htmlType="button" type="primary" size="large" extraClass="ml-10">Оформить заказ</Button>
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