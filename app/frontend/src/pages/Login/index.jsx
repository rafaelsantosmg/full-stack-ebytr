import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Forms from './components/Form';
import './styles/styles.css';

export default function Login() {
  return (
    <Container className="page-login">
      <Row>
        <Col>
          <Forms />
        </Col>
      </Row>
    </Container>
  );
}
