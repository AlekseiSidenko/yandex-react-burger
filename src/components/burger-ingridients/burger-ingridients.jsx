import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components"
import BurgerIngridient from "../burger-ingridient/burger-ingridient";
import ingridientStyles from "./burger-ingridients.module.css"
import IngridientDetails from "../ingridient-details/ingridient-details";

export default function BurgerIngridients() {

    const [state, setState] = React.useState({
        isLoading: false,
        hasError: false,
        data: []
      });

      const [popup, setPopup] = React.useState({
        visible: false,
        popupData: []
      });

      const [current, setCurrent] = React.useState('one')

      const getIngridients = () => {
        setState({...state, isLoading: true, hasError: false});
        fetch(`https://norma.nomoreparties.space/api/ingredients`)
        .then(res => res.json())
        .then(res => setState({...state, data: res.data, isLoading: false}))
        .catch(e => setState({...state, isLoading: false, hasError: true}));
      }

      React.useEffect(() => {
        getIngridients()
      }, [])

      const handleClose = () => {
        setPopup({...popup, visible:false, popupData: []})
    }

    const showIngridient = (data) => {
        setPopup({...popup, visible: true, popupData: data})
        console.log(data)
      }

       const { data, isLoading, hasError } = state;
       const { visible, popupData } = popup

    return (
        <section className={ingridientStyles.ingridients}>
            <p className="text text_type_main-large mb-5">
                Соберите бургер
            </p>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={ingridientStyles.menu}>
                <p className="text text_type_main-medium mt-10 mb-6">Булки</p>
                <div className={ingridientStyles.grid}>
                    {isLoading && 'Загрузка...'}
                    {hasError && 'Произошла ошибка'}
                    {!isLoading && !hasError && data.length && data.map((item) => 
                        item.type === "bun" &&
                        <BurgerIngridient showIngridient={showIngridient} key={item._id} data={item}/>)}
                </div>
                <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
                <div className={ingridientStyles.grid}>
                    {isLoading && 'Загрузка...'}
                    {hasError && 'Произошла ошибка'}
                    {!isLoading && !hasError && data.length && data.map((item) => 
                        item.type === "sauce" && 
                        <BurgerIngridient showIngridient={showIngridient} key={item._id} data={item}/>)}
                </div>
                <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
                <div className={ingridientStyles.grid}>
                    {isLoading && 'Загрузка...'}
                    {hasError && 'Произошла ошибка'}
                    {!isLoading && !hasError && data.length && data.map((item) => 
                        item.type === "main" && 
                        <BurgerIngridient showIngridient={showIngridient} key={item._id} data={item}/>)}
                </div>
            </div>
            {visible && <IngridientDetails handleClose={handleClose} data={popupData}/>}
        </section>
    )
}