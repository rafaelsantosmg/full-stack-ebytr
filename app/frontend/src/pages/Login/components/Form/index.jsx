import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Context } from '../../../../Context';
import { saveUser } from '../../../../services/localStorage';

export default function Forms() {
  const { login, setLogin } = useContext(Context);
  const navigate = useNavigate();

  const getLogin = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3333/login', login)
      .then(({ data }) => {
        saveUser(data.user, data.token);
      });
    setLogin({ email: '', password: '' });
    navigate('/home');
  };

  return (
    <Form>
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
        variant="primary"
        type="submit"
        onClick={ getLogin }
      >
        Entrar
      </Button>
      <Link className="link-create-user" to="/user">Criar Usuário...</Link>
    </Form>
  );
}
