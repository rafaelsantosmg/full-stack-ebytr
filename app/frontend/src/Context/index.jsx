import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

export default function Provider({ children, },) {
  return (
    <Context.Provider
      value={ {
        //
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node,),
    PropTypes.node
  ],).isRequired,
};

export { Context };
