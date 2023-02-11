import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import appStyles from "./app.module.css"

function App() {

  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  const getIngridients = () => {
    setState({...state, isLoading: true, hasError: false});
    fetch(`https://norma.nomoreparties.space/api/ingredients`)
    .then(res => {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
  })
    .then(res => setState({...state, data: res.data, isLoading: false}))
    .catch(e => setState({...state, isLoading: false, hasError: true}));
  }

  React.useEffect(() => {
    getIngridients()
  }, [])

  const { data, isLoading, hasError } = state

  return (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngridients data={data} isLoading={isLoading} hasError={hasError}/>
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App;
