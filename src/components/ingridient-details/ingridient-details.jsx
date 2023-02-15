import React from "react";
import PropTypes from 'prop-types';
import ingridientStyles from "./ingridient-details.module.css"
import Modal from "../modal/modal";
import ModalOverlay from "../modal-overlay/modal-overlay"

export default function IngridientDetails({ data }) {
    
    return (
        <>
            <img className={ingridientStyles.image} src={data.image_large} alt={data.name}/>
            <p className="text text_type_main-medium mt-4 mb-8">{data.name}</p>
            <ul className={ingridientStyles.nutrition}>
                <li className={ingridientStyles.nutrition_item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.calories}</p>
                </li>
                <li className={ingridientStyles.nutrition_item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.proteins}</p>
                </li>
                <li className={ingridientStyles.nutrition_item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.fat}</p>
                </li>
                <li className={ingridientStyles.nutrition_item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</p>
                </li>
            </ul>
        </>
    )
}

const dataPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
})

IngridientDetails.propTypes = {
    data: dataPropTypes.isRequired
}