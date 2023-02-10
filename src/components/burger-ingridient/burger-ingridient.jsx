import React from "react";
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingridientStyles from "./burger-ingridient.module.css"

export default function BurgerIngridient({data, showIngridient}) {
    return (
        <div onClick={() => showIngridient(data)} className={ingridientStyles.item}>
            {data.__v > 0 &&
            <div className={ingridientStyles.counter}>
                <Counter count={data.__v} size="default" extraClass="m-1" />
            </div>}
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

const dataPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired
})

BurgerIngridient.propTypes = {
    data: dataPropTypes.isRequired,
    showIngridient: PropTypes.func.isRequired
}