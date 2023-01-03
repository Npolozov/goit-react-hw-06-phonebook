import { ListContact } from '../ListContact/ListContact';
import { ListStyle, ItemStyle } from './List.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContact, getStatusFilter } from 'redux/selectors';

export const List = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getStatusFilter);

  const normalizeFilter = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ListStyle>
      {visibleContact.map(({ name, number, id }) => (
        <ItemStyle key={id}>
          <ListContact id={id} name={name} number={number} />
        </ItemStyle>
      ))}
    </ListStyle>
  );
};

// List.propTypes = {
//   items: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
