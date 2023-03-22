import React, { FC } from "react";
import orderStyles from "./order.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { SmallIngredient } from "../small-ingredient/small-ingredient";

export const Order: FC<{ status?: string }> = ({ status }) => {
    return (
        <div className={orderStyles.order}>
            <div className={orderStyles.top}>
                <p className="text text_type_digits-default mt-6">#034535</p>
                <p className="text text_type_main-default text_color_inactive mt-6">
                    Сегодня, 16:20 i-GMT+3
                </p>
            </div>
            <p className="text text_type_main-medium mt-6">
                Death Star Starship Main бургер
            </p>
            {status && 
            <p className="text text_type_main-default mt-2">
                Создан
            </p>
            }
            <div className={orderStyles.info}>
                <div className={orderStyles.compound}>
                    <div className={orderStyles.ingredient} style={{zIndex: 10 - 1}}>
                        <SmallIngredient/>
                    </div>
                    <div className={orderStyles.ingredient} style={{zIndex: 10 - 2}}>
                        <SmallIngredient/>
                    </div>
                    <div className={orderStyles.ingredient} style={{zIndex: 10 - 3}}>
                        <SmallIngredient extraQuantity={3}/>
                    </div>
                </div>
                <div className={orderStyles.price}>
                    <p className="text text_type_digits-default mr-2">480</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}