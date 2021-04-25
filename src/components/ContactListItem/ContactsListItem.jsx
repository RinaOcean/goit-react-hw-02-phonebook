import PropTypes from 'prop-types';
import './ContactsListItem.scss';

const ContactsListItem = ({ onDelete, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className="ContactsListItem">
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </>
);

export default ContactsListItem;
