import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

export default function Provider({ children }) {
  const [user, setUser] = useState({ displayName: '', email: '', password: '' });

  const [login, setLogin] = useState({ email: '', password: '' });

  const [isRender, setIsRender] = useState(false);

  const [task, setTask] = useState({
    title: '', content: '', status: 'Pendente',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <Context.Provider
      value={ {
        user,
        setUser,
        login,
        setLogin,
        isRender,
        setIsRender,
        task,
        setTask,
        isEdit,
        setIsEdit,
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
