import { useDispatch } from 'react-redux';
import css from './registration-page.module.scss';
import { registrationThunk } from 'redux/auth/authOperations';

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    dispatch(
      registrationThunk({
        name,
        email,
        password,
      })
    );
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.wrapper} onSubmit={handleSubmit}>
        <h3>Registration form </h3>
        <input
          className={css.input}
          name="name"
          type="text"
          placeholder="Name..."
        />
        <input
          className={css.input}
          name="email"
          autoComplete="off"
          type="text"
          placeholder="Email..."
        />
        <input
          className={css.input}
          name="password"
          type="password"
          placeholder="Password..."
        />
        <button className={css.button}>SignUP</button>
      </form>
    </div>
  );
};
