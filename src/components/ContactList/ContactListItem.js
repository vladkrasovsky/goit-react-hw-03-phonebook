import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';

const ContactListItem = ({ contact: { id, name, number }, onDelete }) => (
  <Item>
    {name}: {number}
    <Button type="button" onClick={() => onDelete(id)}>
      Delete
    </Button>
  </Item>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
