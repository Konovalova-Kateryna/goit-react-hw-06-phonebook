import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Title } from './Section/SectionTitle.styled';
import { SectionBox } from './Section/SectionTitle.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const createContact = newContact => {
    console.log(contacts);
    console.log(newContact);

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${newContact.name} is alredy in contacts.`);
      return;
    } else if (
      contacts.find(contact => contact.number.toString() === newContact.number)
    ) {
      Notiflix.Notify.failure(`${newContact.number} is alredy in contacts.`);
      return;
    }
    dispatch(addContact({ ...newContact }));
    Notiflix.Notify.success(`Contact added`);
  };

  return (
    <SectionBox>
      <ContactForm createContact={createContact} />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </SectionBox>
  );
};
export default App;
