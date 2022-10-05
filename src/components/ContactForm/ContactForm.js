import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';

import {
  Input,
  StyledForm,
  Label,
  ContactFormStyle,
  FormTitle,
  ContactFormBtn,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ createContact }) => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    createContact({ ...value });
    resetForm();
  };
  return (
    <ContactFormStyle>
      <FormTitle>Phonebook</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter contact name"
            />
            <ErrorMessage name="name">
              {() => Notiflix.Notify.failure('Name is required field')}
            </ErrorMessage>
          </Label>
          <Label>
            Telephone:
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter contact phone"
            />
            <ErrorMessage name="number">
              {() => Notiflix.Notify.failure('Number is required field')}
            </ErrorMessage>
          </Label>
          <ContactFormBtn type="submit">Add contact</ContactFormBtn>
        </StyledForm>
      </Formik>
    </ContactFormStyle>
  );
};

export default ContactForm;
