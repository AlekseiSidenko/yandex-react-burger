import React from "react";
import styles from "./styles.module.css";
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from "../services/actions/profile";
import { getCookie } from "../utils/cookie";
import { getNewToken } from "../services/actions/token";
import { useNavigate, Link } from 'react-router-dom'
import { logOut } from "../services/actions/logout";

export function ProfilePage() {

    const [email, setEmail] = React.useState({
        mail: 'Загрузка...',
        disabled: true
    })
    const [name, setName] = React.useState({
        userName: 'Загрузка...',
        disabled: true
    })
    const [pass, setPass] = React.useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.userInfo)
    const { newToken } = useSelector(state => state.newToken)
    const { logOutUser } = useSelector(state => state.logOutSucces)
    const nameRef = React.useRef(null)
    const emailRef = React.useRef(null)
    const activeLink = styles.profile_link + ' ' + styles.profile_link_active
    const inactiveLink = styles.profile_link + ' ' + styles.profile_link_inactive
    const onNameClick = () => {
        setTimeout(() => nameRef.current.focus(), 0)
        setName({ ...name, disabled: false })
    }
    const onEmailClick = () => {
        setTimeout(() => emailRef.current.focus(), 0)
        setEmail({ ...email, disabled: false })
    }
    const returnToLogin = () => {
        dispatch(logOut())
        if (logOutUser.success) {
            return navigate('/login')
        }
    }

    React.useEffect(() => {
        if (getCookie('refToken') === undefined && getCookie('token') === undefined) {
            return navigate('/login')
        } if (getCookie('token') === undefined) {
            return dispatch(getNewToken())
        } else {
            return dispatch(getUserInfo())
        }
    }, [])
    
    React.useEffect(() => {
        if (logOutUser.success) {
            return navigate('/login')
        }
    }, [logOutUser])

    React.useEffect(() => {
        if (newToken.success) {
            dispatch(getUserInfo())
        }
    }, [newToken])

    React.useEffect(() => {
        if (userInfo.success) {
            setName({ ...name, userName: userInfo.user.name });
            setEmail({ ...email, mail: userInfo.user.email });
        }
    }, [userInfo])

    return (
        <div className={styles.profile}>
            <div className={styles.profile_links}>
                <Link to='/profile' className={activeLink}>
                    <p className="text text_type_main-medium">Профиль</p>
                </Link>
                <Link to='/profile/orders' className={inactiveLink}>
                    <p className="text text_type_main-medium">История заказов</p>
                </Link>
                <Link onClick={returnToLogin} className={inactiveLink}>
                    <p className="text text_type_main-medium">Выход</p>
                </Link>
                <p className="text text_type_main-default mt-20 text_color_inactive">
                    В этом разделе вы можете
                    изменить свои персональные данные
                </p>
            </div>
            <div className={styles.profile_input}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onIconClick={onNameClick}
                    onChange={e => setName({ ...name, userName: e.target.value })}
                    value={name.userName}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mb-6"
                    icon={'EditIcon'}
                    ref={nameRef}
                    onBlur={() => setName({ ...name, disabled: true })}
                    disabled={name.disabled ? true : false}
                />
                <Input
                    type={'email'}
                    placeholder={'Логин'}
                    onIconClick={onEmailClick}
                    onChange={e => setEmail({ ...email, mail: e.target.value })}
                    value={email.mail}
                    name={'email'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mb-6"
                    icon={'EditIcon'}
                    ref={emailRef}
                    onBlur={() => setEmail({ ...email, disabled: true })}
                    disabled={email.disabled ? true : false}
                />
                <PasswordInput
                    onChange={e => setPass(e.target.value)}
                    value={pass}
                    name={'password'}
                    icon="EditIcon"
                />
            </div>
        </div>
    )
}