import React from "react";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'
import { Link } from 'react-router-dom'

export default function AppHeader() {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.elements}>
                <div className={headerStyles.left}>
                    <a href="/" className={headerStyles.link}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default ml-2">
                            Конструктор
                        </p>
                    </a>
                    <a href="#" className={headerStyles.link}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive ml-2">
                            Лента заказов
                        </p>
                    </a>
                </div>
                <div className={headerStyles.logo}>
                    <Logo />
                </div>
                <Link to="/profile" className={headerStyles.link}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive ml-2">
                        Личный кабинет
                    </p>
                </Link>
            </div>
        </header>
    )
}