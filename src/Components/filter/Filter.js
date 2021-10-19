import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { findContact } from '../../Redux/phonebook/phonebook-actions';

const Filter = ({ filter, findContact }) => {
  const handleChange = e => {
    const { value } = e.target;

    findContact(value);
  };

  return (
    <label className={s.filter}>
      Find contacts by name:
      <input
        className={s.filterInput}
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  findContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  findContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
