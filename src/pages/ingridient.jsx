import React from "react";
import IngridientDetails from "../components/ingridient-details/ingridient-details";
import styles from "./styles.module.css";

export function IngridientPage() {

    return (
        <div className={styles.ingridient}>
            <IngridientDetails />
        </div>
    )
}