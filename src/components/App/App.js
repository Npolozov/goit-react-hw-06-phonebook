import { useState } from 'react';
import { ContactForm } from '../Form/Form';
import { List } from '../List/List';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import {
  Container,
  Wrapper,
  WrapperContact,
  Title,
  Button,
} from './App.styled';
import { GlobalStyle } from '../GlobalStyles.styled';
import { OpenModal } from 'components/Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalStorage } from '../hooks/useLocal';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contact');
  // const [visibel, setVisibel] = useState('');
  const [showModal, setShowModal] = useState(false);

  // const [contacts, setContacts] = useState(() => {
  //   console.log(initialStickers);
  //   return JSON.parse(localStorage.getItem('contact')) ?? initialStickers;
  // });
  // useEffect(() => {
  //   window.localStorage.setItem('contact', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     return toast.error(`${name} is already in contacts.`);
  //   } else {
  //     setContacts([...contacts, { id: nanoid(), name, number }]);
  //   }
  //   toggleModal();
  // };

  // const changeFilter = e => {
  //   setVisibel(e.currentTarget.value);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // const lenghtContactts = contacts.length;

  // const normalizeFilter = visibel.toLowerCase();

  // const visibleContact = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizeFilter)
  // );

  return (
    <>
      <Container>
        <Wrapper>
          <Button type="button" onClick={toggleModal}>
            Add Contact
          </Button>
          {showModal && (
            <OpenModal onClose={toggleModal}>
              <Title>Phonebook</Title>
              <ContactForm />
            </OpenModal>
          )}
        </Wrapper>
        <WrapperContact>
          <p>Total contacts: </p>
          <Title>Contacts</Title>
          <Filter />
          <List />
        </WrapperContact>
        <ToastContainer autoClose={2000} position="top-right" />
      </Container>
      <GlobalStyle />
    </>
  );
};
