import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';
import Control from './Control';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const isSuccess = this.props.onSubmit(this.state.name, this.state.number);

    if (!isSuccess) return;

    this.setState({ name: '', number: '' });
  };

  render = () => {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Control
          label="Name"
          value={name}
          onChange={this.handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
        />

        <Control
          label="Number"
          value={number}
          onChange={this.handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required={true}
        />

        <button type="submit">Add contact</button>
      </Form>
    );
  };
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
