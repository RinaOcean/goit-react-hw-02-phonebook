import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactsListItem from './components/ContactListItem';

import './App.scss';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget.name);
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <input
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
        </form>
        <h2>Contacts</h2>
        <ContactsList>
          <ContactsListItem contacts={contacts} />
        </ContactsList>
      </>
    );
  }
}

export default App;
