import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactsListItem from './components/ContactListItem';
import ContactForm from './components/ContactForm';

import './App.scss';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
  };

  // handleChange = event => {
  //   event.preventDefault();
  //   const { name, value } = event.currentTarget;
  //   // console.log(event.currentTarget.name);
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state);
  // };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactsList>
          <ContactsListItem contacts={contacts} />
        </ContactsList>
      </>
    );
  }
}

export default App;
