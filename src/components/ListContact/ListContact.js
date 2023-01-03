import { Button } from './ListContact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export function ListContact({ name, number, id }) {
  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>
      <Button onClick={() => dispatch(deleteContact({ id }))}>Delete</Button>
    </>
  );
}

ListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
