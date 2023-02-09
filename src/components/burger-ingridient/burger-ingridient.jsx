import React from "react";
import { CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ingridientStyles from "./burger-ingridient.module.css"

export default function BurgerIngridient({data, showIngridient}) {
    return (
        <div onClick={() => showIngridient(data)} className={ingridientStyles.item}>
            <img src={data.image} />
            <div className={ingridientStyles.price}>
                <p className="text text_type_digits-default mt-1 mb-1 mr-2">{data.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div className={ingridientStyles.text}>
                <p className="text text_type_main-default">{data.name}</p>
            </div>
        </div>
    )
}
