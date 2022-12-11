import PropTypes from 'prop-types';
import Control from 'components/ContactForm/Control';

const Filter = ({ value, onChange }) => (
  <Control label="Find contacts by name" value={value} onChange={onChange} />
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
