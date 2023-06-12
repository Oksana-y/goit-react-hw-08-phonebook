import React from 'react';
import css from './not-found.module.scss';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h2 className={css.message}>
        Page not found...
        <Link className={css.link} to="/">
          Go Home
        </Link>
        <img
          className={css.image}
          src="https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg"
          alt="NotFound"
        ></img>
      </h2>
    </>
  );
};
