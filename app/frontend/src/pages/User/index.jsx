import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Forms from './components/Form';
import './styles/styles.css';

export default function User() {
  return (
    <Container className="page-create-user">
      <Row>
        <Col>
          <Forms />
        </Col>
      </Row>
    </Container>
  );
}
