import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Notification from './Notification';

class App extends Component {
  state = {
    contacts: [
      // Залишив для перевірки
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (!this.validateContact(contact)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    return contact.id;
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  validateContact = ({ name }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    return !contacts.some(({ name }) =>
      name.toLowerCase().includes(normalizedName)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render = () => {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}

          {visibleContacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          ) : (
            <Notification message="There is no contacts" />
          )}
        </Section>

        <GlobalStyle />
      </Layout>
    );
  };
}

export default App;
