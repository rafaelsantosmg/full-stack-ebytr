import React from 'react';
import { Container } from 'react-bootstrap';
import Forms from './components/Form';
import './styles/styles.css';

export default function Login() {
  return (
    <Container className="page-login">
      <Forms />
    </Container>
  );
}
