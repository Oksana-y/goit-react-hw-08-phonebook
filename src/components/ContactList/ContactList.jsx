import css from './contact-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk, deleteContactThunk } from 'redux/operations';

const ContactsList = () => {
  const selectContacts = useSelector(state => state.PhoneBook.contacts.items);
  const selectFilter = useSelector(state => state.PhoneBook.filter);
  const selectLogin = useSelector(state=>state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    selectLogin && dispatch(fetchContactsThunk());
  }, [dispatch,selectLogin]);

  const result = selectContacts.filter(item => {
    return item.name.toLowerCase().includes(selectFilter.toLowerCase());
  });

  const contact = result?.map(item => (
    <li key={item.id} className={css.item}>
      <p className={css.contact}>
        {item.name}: {item.number}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          dispatch(deleteContactThunk(item.id));
        }}
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.list}>{contact}</ul>;
};

export default ContactsList;
