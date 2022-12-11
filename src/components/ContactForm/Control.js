import PropTypes from 'prop-types';

const Control = props => {
  const {
    label,
    value,
    onChange,
    type = 'text',
    name,
    pattern,
    title,
    required,
  } = props;

  return (
    <label>
      <span>{label}</span>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        pattern={pattern}
        required={required}
        title={title}
      />
    </label>
  );
};

Control.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};

export default Control;
