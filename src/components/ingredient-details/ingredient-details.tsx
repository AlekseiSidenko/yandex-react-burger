import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { TElement } from "../../services/types/data";
import ingredientStyles from "./ingredient-details.module.css"


export const IngredientDetails: FC = () => {

    const { ingredients } = useAppSelector(state => state.ingredients)
    const { ingredientId } = useParams()
    const navigate = useNavigate()
    let data: TElement = null!

    if (ingredients && ingredients.length) {
        ingredients.forEach((element, index) => {
            if (element._id === ingredientId) {
                data = element
            } if (index + 1 === ingredients.length && data === null) {
                return navigate("/*", { replace: true })
            }
        })
    }

    return (
        data === null ?
            <p className="text text_type_main-large mt-10 mb-10">
                Загрузка...
            </p>
            :
            <>
                <img className={ingredientStyles.image} src={data.image_large} alt={data.name} />
                <p className="text text_type_main-medium mt-4 mb-8">{data.name}</p>
                <ul className={ingredientStyles.nutrition}>
                    <li className={ingredientStyles.nutrition_item}>
                        <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
                        <p className="text text_type_digits-default text_color_inactive">{data.calories}</p>
                    </li>
                    <li className={ingredientStyles.nutrition_item}>
                        <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{data.proteins}</p>
                    </li>
                    <li className={ingredientStyles.nutrition_item}>
                        <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{data.fat}</p>
                    </li>
                    <li className={ingredientStyles.nutrition_item}>
                        <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</p>
                    </li>
                </ul>
            </>
    )
}
