import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="search"
        value={state.search}
        type="text"
        placeholder="Enter movies"
        required
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
