import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { fetchContacts } from '../../redux/contacts/contactOperations';
import { changeFilter } from '../../redux/contacts/contactSlice';
import css from './PhoneBook.module.css';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  const handleFilterInput = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isVisibleContacts = () => {
    if (contacts.length !== 0 && typeof contacts !== 'string') {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrap}>
        <ContactForm />
      </div>
      <h2 className={css.titleSection}>Contacts</h2>

      <Filter filter={filter} onChange={handleFilterInput} />
      <ContactList contacts={isVisibleContacts()} />
    </div>
  );
}