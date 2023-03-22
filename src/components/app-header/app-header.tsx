import React from "react";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function AppHeader() {

    const { pathname } = useLocation()
    const constrPage = pathname === "/"
    const profPage = pathname === "/profile"
    const feedPage = pathname === "/feed"

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.elements}>
                <div className={headerStyles.left}>
                    <Link to="/" className={headerStyles.link}>
                        {constrPage ?
                            <>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default ml-2">
                                    Конструктор
                                </p>
                            </>
                            :
                            <>
                                <BurgerIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive  ml-2">
                                    Конструктор
                                </p>
                            </>
                        }

                    </Link>
                    <Link to="/feed" className={headerStyles.link}>
                        {feedPage ?
                            <>
                                <ListIcon type="primary" />
                                <p className="text text_type_main-default ml-2">
                                    Лента заказов
                                </p>
                            </>
                            :
                            <>
                                <ListIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive ml-2">
                                    Лента заказов
                                </p>
                            </>
                        }
                    </Link>
                </div>
                <div className={headerStyles.logo}>
                    <Logo />
                </div>
                <Link to="/profile" className={headerStyles.link}>
                    {profPage ?
                        <>
                            <ProfileIcon type="primary" />
                            <p className="text text_type_main-default ml-2">
                                Личный кабинет
                            </p>
                        </>
                        :
                        <>
                            <ProfileIcon type="secondary" />
                            <p className="text text_type_main-default text_color_inactive ml-2">
                                Личный кабинет
                            </p>
                        </>
                    }
                </Link>
            </div>
        </header>
    )
}