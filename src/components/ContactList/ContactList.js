import Contact from '../Contact';
import { List, ListItem, ContactListBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(filter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.trim())
  );

  return (
    <ContactListBox>
      <List>
        {filteredContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              <Contact contact={contact} />
            </ListItem>
          );
        })}
      </List>
    </ContactListBox>
  );
};

export default ContactList;
