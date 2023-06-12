import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { HomePage } from '../pages/HomePage/HomePage';
import PhoneBookPage from '../pages/PhoneBookPage/PhoneBookPage';
import { Layout } from './Layout/Layout';
import { refreshThunk } from 'redux/auth/authOperations';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from '../hoc/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <PhoneBookPage />
            </PrivateRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="registration"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
