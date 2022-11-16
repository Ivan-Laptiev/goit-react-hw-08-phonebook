import { Routes, Route } from 'react-router-dom';
import { fetchCurrentUser } from '../../redux/auth/authOperations';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

import Loader from '../../components/Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home/HomePage'));
const PhoneBook = lazy(() => import('../PhoneBook/PhoneBook'));
const AppBar = lazy(() => import('components/AppBar/AppBar'));
const Login = lazy(() => import('../../pages/Login/LoginPage.jsx'));
const Register = lazy(() => import('../../pages/Register/RegisterPage'));
const PrivateRoute = lazy(() => import('../PrivateRoute/PrivateRoute'));
const PublicRoute = lazy(() => import('../PublicRoute/PublicRoute'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route
              index
              element={
                <PublicRoute isLoggedIn={isLoggedIn} redirectPath="/contacts">
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              element={
                <PublicRoute
                  redirectPath="/contacts"
                  isLoggedIn={isLoggedIn}
                  restricted
                />
              }
            >
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn} redirectPath="/login">
                  <PhoneBook />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};