import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from './components/Table';
import Forms from './components/Form';
import './styles/styles.css';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Forms />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table />
        </Col>
      </Row>
    </Container>
  );
}
