import { useSelector } from 'react-redux';
import { loginSelector } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(loginSelector);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return children;
};
