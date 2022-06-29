import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Context } from '../../../../Context';

export default function Forms() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3333/users', user);
    setUser({ displayName: '', email: '', password: '' });
    navigate('/');
  };

  return (
    <Form>
      <h1 className="title-user">Usuário</h1>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nome de Usuário</Form.Label>
        <Form.Control
          type="text"
          value={ user.displayName }
          onChange={ (event) => setUser({ ...user, displayName: event.target.value }) }
          placeholder="Enter userName"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={ user.email }
          onChange={ (event) => setUser({ ...user, email: event.target.value }) }
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={ user.password }
          onChange={ (event) => setUser({ ...user, password: event.target.value }) }
          placeholder="Password"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={ createUser }
      >
        Criar
      </Button>
    </Form>
  );
}
