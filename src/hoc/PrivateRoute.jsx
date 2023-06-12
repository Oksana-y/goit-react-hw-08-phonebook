import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginSelector } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(loginSelector);
  console.log(isLogin);
  return isLogin ? children : <Navigate to="/login" />;
};
