import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Context } from '../../../../Context';
import { saveUser } from '../../../../services/localStorage';
import { apiPost } from '../../../../services/api';

export default function Forms() {
  const { login, setLogin } = useContext(Context);
  const navigate = useNavigate();

  const getLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await apiPost('/login', login);
      saveUser(data.user, data.token);
      setLogin({ email: '', password: '' });
      navigate('/home');
    } catch (error) {
      // eslint-disable-next-line no-alert
      window.alert(error.message);
    }
  };

  return (
    <Form className="border border-white p-4 text-white bg-dark shadow rounded">
      <h1 className="title-login">Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={ login.email }
          onChange={ (event) => setLogin({ ...login, email: event.target.value }) }
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={ login.password }
          onChange={ (event) => setLogin({ ...login, password: event.target.value }) }
          placeholder="Password"
        />
      </Form.Group>
      <Button
        variant="light"
        type="submit"
        onClick={ getLogin }
      >
        Entrar
      </Button>
      <Link
        className="link-create-user text-light bg-dark"
        to="/user"
      >
        Criar Usuário...
      </Link>
    </Form>
  );
}
