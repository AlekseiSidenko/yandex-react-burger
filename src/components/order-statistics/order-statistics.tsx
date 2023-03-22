import React, { FC } from "react";
import statisticsStyle from './order-statistics.module.css'

export const OrderStatistics: FC = () => {
    return (
        <div className={statisticsStyle.statistics}>
            <div className={statisticsStyle.status}>
                <div className={statisticsStyle.ready}>
                    <p className="text text_type_main-medium mb-4">Готовы:</p>
                    <div className={statisticsStyle.ready_nubmers}>
                        <p className="text text_type_digits-default mt-2 mr-15">034535</p>
                    </div>
                </div>
                <div className={statisticsStyle.in_work}>
                    <p className="text text_type_main-medium mb-4">В работе:</p>
                    <div className={statisticsStyle.in_work_nubmers}>
                        <p className="text text_type_digits-default mt-2 mr-15">034535</p>
                    </div>
                </div>
            </div>
            <p className="text text_type_main-medium mt-15">Выполнено за все время:</p>
            <p className="text text_type_digits-large">28 752</p>
            <p className="text text_type_main-medium mt-15">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large">138</p>
        </div>
    )
}