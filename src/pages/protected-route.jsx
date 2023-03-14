import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({anonimous, element}) {

    const authChecked = useSelector(state => state.userInfo.authChecked)
    const isLoggedIn = !!useSelector(state => state.userInfo.userInfo)
    const location = useLocation()
    const { from } = location.state || {from: {pathname: '/'}}

    if (!authChecked) {
        return <h1>Загрузка...</h1>
    }

    if (anonimous && isLoggedIn) {
        return (
            <Navigate to={from.pathname} replace/>
        )
    }

    if (!anonimous && !isLoggedIn) {
        return (
            <Navigate to="/login" state={{ from: location}} />
        )
    }

    return element
}