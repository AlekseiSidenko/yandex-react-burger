import React from "react";
import constructorStyles from "./burger-constructor.module.css"
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import OrderDetails from "../order-details/order-details";
import Currency  from "../../images/Currency.svg";
import Modal from "../modal/modal";

export default function BurgerConstructor () {

    const [popup, setPopup] = React.useState({visible: false})

    const handleOpenPopup = () => {
        setPopup({visible: true})
    }

    const handleClosePopup = () => {
        setPopup({visible: false})
    }

    return (
        <section className={constructorStyles.constructor}>
            <ul className={constructorStyles.list}>
                <li className={constructorStyles.bun}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={1255}
                        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                    />
                </li>
                <ul className={constructorStyles.filling}>
                    <li className={constructorStyles.filling_item}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Соус традиционный галактический"
                            price={15}
                            thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
                            className="ml-2"
                        />
                    </li>
                    <li className={constructorStyles.filling_item}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Мясо бессмертных моллюсков Protostomia"
                            price={1337}
                            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
                            className="ml-2"
                        />
                    </li>
                    <li className={constructorStyles.filling_item}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Плоды Фалленианского дерева"
                            price={874}
                            thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
                            className="ml-2"
                        />
                    </li>
                    <li className={constructorStyles.filling_item}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={300}
                            thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
                            className="ml-2"
                        />
                    </li>
                    <li className={constructorStyles.filling_item}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={300}
                            thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
                            className="ml-2"
                        />
                    </li>
                </ul>
               <li className={constructorStyles.bun}> 
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={1255}
                        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                    />
                </li>
            </ul>
            <div className={constructorStyles.order}>
                <p className="text text_type_digits-medium">4081</p>
                <img src={Currency} alt="Иконка текущей валюты" className={constructorStyles.currency} />
                <Button onClick={handleOpenPopup} htmlType="button" type="primary" size="large" extraClass="ml-10">Оформить заказ</Button>
            </div>
            {popup.visible && <Modal handleClose={handleClosePopup}>
                                <OrderDetails handleClose={handleClosePopup}/>
                            </Modal>}
        </section>
    )
}