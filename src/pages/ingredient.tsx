import React, { FC } from "react";
import { IngredientDetails } from "../components/ingredient-details/ingredient-details";
import styles from "./styles.module.css";

export const IngredientPage: FC = () => {

    return (
        <div className={styles.ingredient}>
            <IngredientDetails />
        </div>
    )
}