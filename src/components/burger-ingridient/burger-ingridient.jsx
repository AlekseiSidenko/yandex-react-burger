import React from "react";
import { useSelector } from "react-redux"
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingridientStyles from "./burger-ingridient.module.css"
import ingridientType from "../../utils/types";
import { useDrag } from "react-dnd"
import { Link, useLocation } from 'react-router-dom'

export default function BurgerIngridient({ data }) {

    const { draggedElements } = useSelector(state => state.elements)
    const location = useLocation();

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
        <Link
            to={{ pathname: `/ingredients/${data._id}` }}
            state={{ background: location }}
            className={ingridientStyles.link}>
            <div ref={dragRef} className={ingridientStyles.item}>
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
        </Link>
    )
}

BurgerIngridient.propTypes = {
    data: ingridientType.isRequired,
}