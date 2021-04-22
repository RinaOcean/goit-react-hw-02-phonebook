import PropTypes from 'prop-types';

const ContactsListItem = ({ contacts }) => (
  <>
    {contacts.map(({ contact }) => {
      return <li>{contact}</li>;
    })}
  </>
);

export default ContactsListItem;
