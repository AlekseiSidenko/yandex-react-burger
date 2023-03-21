import React, { FC } from "react";
import styles from "./styles.module.css";

export const NotFound404: FC = () => {

    return (
        <div className={styles.not_found}>
            <p className="text text_type_digits-large">404</p>
            <div className={styles.signature}>
                <p className="text text_type_main-medium">
                    Такой страницы нет &#128566;
                </p>
            </div>
        </div>
    )
}