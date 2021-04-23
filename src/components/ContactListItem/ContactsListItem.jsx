import PropTypes from 'prop-types';

const ContactsListItem = ({ contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}: {number}
        </li>
      );
    })}
  </>
);

export default ContactsListItem;
