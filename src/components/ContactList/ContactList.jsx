import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.contacts}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
