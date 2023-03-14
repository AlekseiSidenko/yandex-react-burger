import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
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


function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getUserInfo(getCookie('token'), getCookie('refToken')))
  },[])

  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ingredients/:_id' element={<IngridientPage />}/>
          <Route path='/login' element={<ProtectedRoute anonimous={true} element={<LoginPage />}/>} />
          <Route path='/register' element={<ProtectedRoute anonimous={true} element={<RegisterPage />}/>} />
          <Route path='/forgot-password' element={<ProtectedRoute anonimous={true} element={<ForgotPasswordPage />}/>} />
          <Route path='/reset-password' element={<ProtectedRoute anonimous={true} element={<PasswordResetPage />}/>} />
          <Route path='/profile' element={<ProtectedRoute anonimous={false} element={<ProfilePage><ProfileEdit/></ProfilePage>} />} />
          <Route path='/profile/orders' element={<ProtectedRoute anonimous={false} element={<ProfilePage />} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
