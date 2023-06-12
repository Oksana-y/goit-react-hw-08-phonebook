import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/authOperations';
import css from './login-page.module.scss';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const credentials = {
      email,
      password,
    };

    dispatch(loginThunk(credentials)).then(() =>
      navigate(location.state?.from ?? '/')
    );

    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.wrapper} onSubmit={handleSubmit}>
        <h3>Login Form</h3>
        <input
          className={css.input}
          name="email"
          placeholder="Email..."
          type="text"
        />
        <input
          className={css.input}
          name="password"
          placeholder="Password..."
          type="password"
        />
        <button className={css.button}>Login</button>
      </form>
    </div>
  );
};
