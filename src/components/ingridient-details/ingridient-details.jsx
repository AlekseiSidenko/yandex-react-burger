import React from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import ingridientStyles from "./ingridient-details.module.css"


export default function IngridientDetails() {

    const { ingridients } = useSelector(state => state.ingridients)
    let data = null
    const { ingridientId } = useParams()
    ingridients.forEach(element => {
        if (element._id === ingridientId) {
            data = element
        }
    })


    return (
        data === null ?
            <p className="text text_type_main-large mt-10 mb-10">
                Загрузка...
            </p>
            :
            <>
                <img className={ingridientStyles.image} src={data.image_large} alt={data.name} />
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
