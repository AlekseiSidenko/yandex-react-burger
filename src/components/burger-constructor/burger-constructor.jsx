import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import constructorStyles from "./burger-constructor.module.css"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import OrderDetails from "../order-details/order-details";
import Currency  from "../../images/Currency.svg";
import Modal from "../modal/modal";
import { useDrop } from "react-dnd";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import { addIngridient } from "../../services/actions/burger-constructor";
import { sendOrder } from "../../services/actions/order-details";

export default function BurgerConstructor () {

    const { draggedElements, bunsPrice, elementsPrice } = useSelector((state) => state.elements)
    const { popupVisible } = useSelector(state => state.orderDetails)

    const dispatch = useDispatch()

    const [, dropTarget] = useDrop({
        accept: 'ingridient',
        drop(item) {
            dispatch(addIngridient(item));
        }
    })

    const orderIt = (draggedElements) => {
        dispatch(sendOrder(draggedElements))
    }

    return (
        <section ref={dropTarget} className={constructorStyles.constructor}>


            <ul className={constructorStyles.list}>
                {draggedElements.map((item) => 
                item.type === 'bun' && 
                <BurgerConstructorElement key={item.uid + 'top'} element={item} topOrBottom={"top"}  extraName={' (верх)'}/>)}
                <ul className={constructorStyles.filling}>
                    {draggedElements.map((item, index) =>
                    item.type !== 'bun' &&
                        <BurgerConstructorElement key={item.uid} index={index} element={item}/>)}
                </ul>
                    {draggedElements.map((item) => 
                    item.type === 'bun' && 
                    <BurgerConstructorElement key={item.uid + 'bottom'} element={item} topOrBottom={"bottom"} extraName={' (низ)'}/>)}
            </ul>
            <div className={constructorStyles.order}>
                <p className="text text_type_digits-medium">{bunsPrice + elementsPrice}</p>
                <img src={Currency} alt="Иконка текущей валюты" className={constructorStyles.currency} />
                <Button onClick={() => orderIt(draggedElements)} htmlType="button" type="primary" size="large" extraClass="ml-10">Оформить заказ</Button>
            </div>
            {popupVisible && <Modal>
                                <OrderDetails/>
                            </Modal>}
        </section>
    )
}