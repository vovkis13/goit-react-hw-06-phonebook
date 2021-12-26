import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContcts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

export default function ContactList() {
  const filteredContcts = useSelector(getFilteredContcts);
  return (
    <ul className={s.contacts}>
      {filteredContcts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}