import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import s from './Contact.module.css';

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <li className={s.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button
        className={s.button}
        type="button"
        value={id}
        onClick={dispatch(actions.deleteContact)}
      >
        Delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
