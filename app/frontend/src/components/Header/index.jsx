import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getUser } from '../../services/localStorage';
import './styles/styles.css';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getUser().user);
  }, []);

  const clearStorage = () => {
    localStorage.removeItem('ebytr');
    navigate('/');
  };

  return (
    <Container className="header" fluid="md">
      <Row>
        <Col>
          <h1>{ user.displayName }</h1>
        </Col>
        <Col>
          <h1>Lista de Tarefas</h1>
        </Col>
        <Col style={ { textAlign: 'right' } }>
          <i
            aria-hidden
            className="bi bi-door-closed"
            style={ { fontSize: '40px', color: '#fff' } }
            onClick={ clearStorage }
          />
        </Col>
      </Row>
    </Container>
  );
}
