import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  HomePage, LoginPage, RegisterPage, ForgotPasswordPage,
  PasswordResetPage, ProfilePage
} from '../../pages';
import IngridientDetails from '../ingridient-details/ingridient-details';
import AppHeader from '../app-header/app-header';


function App() {

  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:_id' element={<IngridientDetails />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<PasswordResetPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
