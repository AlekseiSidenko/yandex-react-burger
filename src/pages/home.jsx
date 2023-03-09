import React from "react";
import BurgerIngridients from "../components/burger-ingridients/burger-ingridients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import styles from "./styles.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function HomePage() {
    return (
        <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngridients />
                <BurgerConstructor />
            </DndProvider>
        </main>
    )
}