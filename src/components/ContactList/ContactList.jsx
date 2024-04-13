import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameContactFilter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.text.name.toLowerCase().includes(nameContactFilter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
