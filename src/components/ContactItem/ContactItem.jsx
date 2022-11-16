import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactItem.module.css';
import {
  editContact,
  deleteContact,
} from '../../redux/contacts/contactOperations';
import { getContacts } from '../../redux/contacts/contactsSelectors';

const ContactItem = ({ id, name, number }) => {
  const [changeName] = useState(name);
  const [changeNumber] = useState(number);
  const [changeContact, setChangeContact] = useState(false);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handelChengeContact = () => {
    if (changeContact) {
      if (name === changeName && number === changeNumber) {
        setChangeContact(!changeContact);
        return;
      }
      if (
        contacts.find(
          contact =>
            contact.name.toLocaleLowerCase() ===
              changeName.toLocaleLowerCase() && contact.id !== id
        )
      ) {
        toast.warning(`${changeName} Alredy have`);
        return;
      }
      dispatch(
        editContact({
          id,
          name: changeName,
          number: changeNumber,
        })
      );
    }
    setChangeContact(!changeContact);
  };
  return (
    <li className={css.item} id={id}>
      <div className={css.valueWrap}>
        <span className={css.name}>{name}: </span>
        <span>{number}</span>
      </div>

      <button
        className={css.btnDelete}
        onClick={() => dispatch(deleteContact(id))}
        onChange={handelChengeContact}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;