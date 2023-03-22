import React, { FC } from "react";
import smallIngStyles from './small-ingredient.module.css'

export const SmallIngredient: FC<{ extraQuantity?: number }> = ({ extraQuantity }) => {
    return (
        <div className={smallIngStyles.border}>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" className={smallIngStyles.image} />
            {extraQuantity &&
                <div className={smallIngStyles.extra}>
                    <p className="text text_type_main-small">+{extraQuantity}</p>
                </div>
            }
        </div>
    )
}