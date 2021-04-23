import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactsListItem from './components/ContactListItem';
import ContactForm from './components/ContactForm';

import './App.scss';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactsList>
          <ContactsListItem contacts={contacts} />
        </ContactsList>
      </>
    );
  }
}

export default App;
