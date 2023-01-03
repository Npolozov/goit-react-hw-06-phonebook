import { ListContact } from '../ListContact/ListContact';
import { ListStyle, ItemStyle } from './List.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContact, getStatusFilter } from 'redux/selectors';

export const List = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getStatusFilter);
  console.log(contacts);
  console.log(filter);

  const getVisibleContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <ListStyle>
      {visibleContacts.map(({ name, number, id }) => (
        <ItemStyle key={id}>
          <ListContact name={name} number={number} />
        </ItemStyle>
      ))}
    </ListStyle>
  );
};

// List.propTypes = {
//   items: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
