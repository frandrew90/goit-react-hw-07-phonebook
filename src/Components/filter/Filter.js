import React from 'react';
// import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { findContact } from '../../Redux/phonebook/phonebook-actions';
import { getFilter } from '../../Redux/phonebook/phonebook-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(findContact(value));
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

export default Filter;

// Filter.propTypes = {
//   findContact: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
