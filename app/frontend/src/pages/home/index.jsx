import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Table from './components/Table';
import Forms from './components/Form';
import './styles/styles.css';

export default function Home() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
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
