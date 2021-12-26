import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <div className={s.filter}>
      <p className={s.title}>Find contacts by name</p>
      <label>
        <input
          className={s.input}
          type="text"
          name="filterValue"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan"
          onChange={handleFilter}
        />
      </label>
    </div>
  );
}

