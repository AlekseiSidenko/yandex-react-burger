import React from "react";
import IngridientDetails from "../components/ingridient-details/ingridient-details";
import styles from "./styles.module.css";

export function IngridientPage() {
    
    let a = localStorage.getItem('Ingridient');
    let b = JSON.parse(a);
    console.log(b)

    return (
        <div className={styles.ingridient}>
            <IngridientDetails />
        </div>
    )
}