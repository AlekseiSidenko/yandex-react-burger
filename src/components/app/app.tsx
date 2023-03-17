import React, { FC } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import {
  HomePage, LoginPage, RegisterPage, ForgotPasswordPage,
  PasswordResetPage, ProfilePage, IngredientPage
} from '../../pages';
import { ProtectedRoute } from '../../pages/protected-route';
import AppHeader from '../app-header/app-header';
import { getUserInfo } from '../../services/actions/profile';
import { getCookie } from '../../utils/cookie';
import ProfileEdit from '../profile-edit/profile-edit';
import { Modal } from '../modal/modal';
import { getIngredients } from '../../services/actions/burger-ingredients';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { useAppDispatch } from '../../hooks/hooks';


export const App: FC = () => {

  const dispatch = useAppDispatch()
  const location = useLocation()
  const background = location.state && location.state.background;

  const navigate = useNavigate()
  const handleClose = () => {
    navigate(-1)
  }
  React.useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUserInfo(getCookie('token')))
  }, [])

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<ProtectedRoute anonymous element={<LoginPage />} />} />
        <Route path='/register' element={<ProtectedRoute anonymous element={<RegisterPage />} />} />
        <Route path='/forgot-password' element={<ProtectedRoute anonymous element={<ForgotPasswordPage />} />} />
        <Route path='/reset-password' element={<ProtectedRoute anonymous element={<PasswordResetPage />} />} />
        <Route path='/profile' element={<ProtectedRoute element={<ProfilePage><ProfileEdit /></ProfilePage>} />} />
        <Route path='/profile/orders' element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path='/ingredients/:ingredientId' element={<IngredientPage />} />
      </Routes>
      {background && (
        <Routes location={location}>
          <Route path='/ingredients/:ingredientId' element={
            <Modal handleClose={handleClose} headName={'Детали ингридиента'}>
              <IngredientDetails />
            </Modal>}
          />
        </Routes>
      )}
    </>
  );
}
