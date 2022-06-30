import React from 'react';
import { Container } from 'react-bootstrap';
import Forms from './components/Form';
import './styles/styles.css';

export default function User() {
  return (
    <Container className="page-create-user">
      <Forms />
    </Container>
  );
}
