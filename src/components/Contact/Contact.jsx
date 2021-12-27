import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import s from './Contact.module.css';

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = e => {
    e.preventDefault();
    dispatch(actions.changeFilter(''));
    dispatch(actions.deleteContact(id));
  };

  return (
    <li className={s.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button
        className={s.button}
        type="button"
        value={id}
        onClick={handleDelete}
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
