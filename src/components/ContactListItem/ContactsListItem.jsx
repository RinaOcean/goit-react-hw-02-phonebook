import PropTypes from 'prop-types';

const ContactsListItem = ({ contacts }) => (
  <div>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name} {number}
        </li>
      );
    })}
  </div>
);

export default ContactsListItem;
