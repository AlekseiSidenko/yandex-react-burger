import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { TElement } from "../../services/types/data";
import smallIngStyles from './small-ingredient.module.css'

export const SmallIngredient: FC<{ extraQuantity?: number, ingredient: TElement }> = ({ extraQuantity, ingredient }) => {
    
    return (
        <div className={smallIngStyles.border}>
            <img src={ingredient.image} alt={ingredient.name} className={smallIngStyles.image} />
            {extraQuantity && extraQuantity !== 0 &&
                <div className={smallIngStyles.extra}>
                    <p className="text text_type_main-small">+{extraQuantity}</p>
                </div>
            }
        </div>
    )
}