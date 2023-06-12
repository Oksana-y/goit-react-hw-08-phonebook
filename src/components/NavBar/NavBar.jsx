import { NavLink } from 'react-router-dom';
import { selectUser } from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authOperations';
import css from './nav-bar.module.scss';

export const NavBar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <header className={css.header}>
      <div>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      </div>

      {name ? (
        <div className={css.box}>
          <h2 className={css.greetings}>
            Welcome, <span>{name}</span>
          </h2>
          <button
            className={css.button}
            onClick={() => dispatch(logoutThunk())}
          >
            Exit
          </button>
        </div>
      ) : (
        <div>
          <NavLink className={css.link} to="/login">
            <span>login</span>
          </NavLink>{' '}
          |
          <NavLink className={css.link} to="/registration">
            <span> signUp</span>
          </NavLink>
        </div>
      )}
    </header>
  );
};
