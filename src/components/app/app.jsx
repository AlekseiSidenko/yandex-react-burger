import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import appStyles from "./app.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { compose, createStore } from 'redux';
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


function App() {

  return (
    <>
      <AppHeader />
        <main className={appStyles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngridients />
            <BurgerConstructor />
          </DndProvider>
        </main>
    </>
  );
}

export default App;
