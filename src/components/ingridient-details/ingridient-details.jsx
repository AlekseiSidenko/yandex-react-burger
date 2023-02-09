import React from "react";
import ingridientStyles from "./ingridient-details.module.css"
import Modal from "../modal/modal";
import ModalOverlay from "../modal-overlay/modal-overlay"

export default function IngridientDetails({data, handleClose}) {
    
    return (
    <Modal handleClose={handleClose} modalName="Детали ингридиента">
            <img className={ingridientStyles.image} src={data.image_large}/>
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
            <ModalOverlay handleClose={handleClose}></ModalOverlay>
    </Modal>
    )
}