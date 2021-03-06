import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Context } from '../../../../Context';
import { apiPost } from '../../../../services/api';

export default function Forms() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    try {
      await apiPost('/users', user);
      setUser({ displayName: '', email: '', password: '' });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form className="border border-white p-4 text-white bg-dark shadow rounded">
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
        variant="light"
        type="submit"
        onClick={ createUser }
      >
        Criar
      </Button>
    </Form>
  );
}
