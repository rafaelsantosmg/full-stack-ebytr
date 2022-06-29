import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

export default function Provider({ children }) {
  const [user, setUser] = useState(
    { displayName: '', email: '', password: '' },
  );
  return (
    <Context.Provider
      value={ {
        user,
        setUser,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Context };
