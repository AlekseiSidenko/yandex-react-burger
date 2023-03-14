import React from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import {
  HomePage, LoginPage, RegisterPage, ForgotPasswordPage,
  PasswordResetPage, ProfilePage, IngridientPage
} from '../../pages';
import { ProtectedRoute } from '../../pages/protected-route';
import AppHeader from '../app-header/app-header';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../services/actions/profile';
import { getCookie } from '../../utils/cookie';
import ProfileEdit from '../profile-edit/profile-edit';
import IngridientDetails from '../ingridient-details/ingridient-details';
import Modal from '../modal/modal';
import { getIngridients } from '../../services/actions/burger-ingridients';


function App() {

  const dispatch = useDispatch()
  const location = useLocation()
  const background = location.state && location.state.background;
  const navigate = useNavigate()
  const handleClose = () => {
    navigate(-1)
  }
  React.useEffect(() => {
    dispatch(getIngridients())
    dispatch(getUserInfo(getCookie('token'), getCookie('refToken')))
  }, [])

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<ProtectedRoute anonimous={true} element={<LoginPage />} />} />
        <Route path='/register' element={<ProtectedRoute anonimous={true} element={<RegisterPage />} />} />
        <Route path='/forgot-password' element={<ProtectedRoute anonimous={true} element={<ForgotPasswordPage />} />} />
        <Route path='/reset-password' element={<ProtectedRoute anonimous={true} element={<PasswordResetPage />} />} />
        <Route path='/profile' element={<ProtectedRoute anonimous={false} element={<ProfilePage><ProfileEdit /></ProfilePage>} />} />
        <Route path='/profile/orders' element={<ProtectedRoute anonimous={false} element={<ProfilePage />} />} />
        <Route path='/ingredients/:ingridientId' element={<IngridientPage />} />
      </Routes>
      {background && (
        <Routes location={location}>
          <Route path='/ingredients/:ingridientId' element={
            <Modal handleClose={handleClose} headName={'Детали ингридиента'}>
              <IngridientDetails />
            </Modal>}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
