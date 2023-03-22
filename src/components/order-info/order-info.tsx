import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import orderStyles from './order-info.module.css';
import { SmallIngredient } from "../small-ingredient/small-ingredient";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderInfo: FC = () => {
    const location = useLocation()

    return (
        <div className={orderStyles.info}>
            {!location.state &&
                <p className="text text_type_digits-default mt-6">123456</p>
            }
            <div className={orderStyles.description}>
                <p className="text text_type_main-medium mt-10">
                    Black Hole Singularity острый бургер
                </p>
                <p className="text text_type_main-default mt-3">
                    Создан
                </p>
                {/* не забыть поменять цвет статуса */}
                <p className="text text_type_main-medium mt-15 mb-6">
                    Состав:
                </p>
            </div>
            <ul className={orderStyles.ingredients}>
                <li className={orderStyles.ingredient}>
                    <div className={orderStyles.picture}>
                        <SmallIngredient />
                        <p className="text text_type_main-default ml-4">
                            Флюоресцентная булка R2-D3
                        </p>
                    </div>
                    <div className={orderStyles.price}>
                        <p className="text text_type_digits-default mr-2">480</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </li>
            </ul>
            <p className="text text_type_main-default text_color_inactive mt-10 mb-10">
                Сегодня, 16:20 i-GMT+3
            </p>
        </div>
    )
}