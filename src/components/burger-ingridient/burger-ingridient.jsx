import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingridientStyles from "./burger-ingridient.module.css"
import ingridientType from "../../utils/types";
import { useDrag } from "react-dnd"
import { showIngeidient } from "../../services/actions/ingridient-details";
import { useParams, useLocation } from 'react-router-dom'

export default function BurgerIngridient({ data }) {

    const { draggedElements } = useSelector(state => state.elements)
    const dispatch = useDispatch()
    // let { state } = useLocation();

    const ingridientCounter = React.useMemo(() => {
        let counter = 0
        draggedElements.forEach(element => {
            if (element._id === data._id) {
                counter = counter + 1
            }
        })
        return counter
    }, [draggedElements])

    const [{ isDrag }, dragRef] = useDrag({
        type: "ingridient",
        item: data,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    return (
        !isDrag &&
        <div ref={dragRef} onClick={() => dispatch(showIngeidient(data))} className={ingridientStyles.item}>
            {ingridientCounter > 0 &&
                <div className={ingridientStyles.counter}>
                    <Counter count={ingridientCounter} size="default" extraClass="m-1" />
                </div>}
            <img src={data.image} alt={data.name} />
            <div className={ingridientStyles.price}>
                <p className="text text_type_digits-default mt-1 mb-1 mr-2">{data.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div className={ingridientStyles.text}>
                <p className="text text_type_main-default">{data.name}</p>
            </div>
        </div>
    )
}

BurgerIngridient.propTypes = {
    data: ingridientType.isRequired,
}