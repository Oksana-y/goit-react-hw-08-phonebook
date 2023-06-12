import { filterAllContacts } from 'redux/slice';
import css from './filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const selectFilter = useSelector(state => state.PhoneBook.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterAllContacts(e.target.value));
  };

  return (
    <div>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        defaultValue={selectFilter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
