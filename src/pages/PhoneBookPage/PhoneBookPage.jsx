import css from './phone-book.module.scss';
import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useLocation } from 'react-router-dom';

const PhoneBook = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default PhoneBook;
