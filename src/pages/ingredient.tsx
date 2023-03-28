import React, { FC, ReactNode } from "react";
import { IngredientDetails } from "../components/ingredient-details/ingredient-details";
import styles from "./styles.module.css";

export const InfoPage: FC<{children: ReactNode}> = ({children}) => {

    return (
        <div className={styles.info}>
            {children}
        </div>
    )
}