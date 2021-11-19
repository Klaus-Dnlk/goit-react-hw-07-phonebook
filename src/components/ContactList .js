import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import contactOperations from '../redux/contacts/contacts-operations';
import s from './Styles.module.scss';
import contactsSelectors from '../redux/contacts/contacts-selectors';

function ContactList({ contacts, deleteContact }) {
  const isLoading = useSelector(contactsSelectors.getLoading);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.listItem}>
            <p>
              {name}: {number}
            </p>
            <button
              onClick={() => deleteContact(id)}
              className={s.btn}
              title="Удалить контакт"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
