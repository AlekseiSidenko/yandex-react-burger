import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngridients from './components/burger-ingridients/burger-ingridients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

function App() {
  return (
    <>
      <AppHeader />
      <div style={{display: "grid", gridTemplateColumns: "repeat(2, 600px)", maxWidth: "1240px",
      gap: "40px", justifyContent: "center", margin: "auto"}}>
        <BurgerIngridients />
        <BurgerConstructor />
      </div>
    </>
  );
}

export default App;
