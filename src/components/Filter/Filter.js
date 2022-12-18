import PropTypes from 'prop-types';
import Control from 'components/ContactForm/Control';

const Filter = ({ value, onFilter }) => {
  const handleChange = e => {
    onFilter(e.currentTarget.value);
  };

  return (
    <Control
      label="Find contacts by name"
      value={value}
      onChange={handleChange}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
