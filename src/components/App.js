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
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const isInContacts = this.checkIsInContacts(name);

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return null;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

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

  checkIsInContacts = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) =>
      name.toLowerCase().includes(normalizedName)
    );
  };

  getFilter = filter => this.setState({ filter });

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
            <Filter value={filter} onFilter={this.getFilter} />
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
