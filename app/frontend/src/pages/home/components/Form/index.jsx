import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Forms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Taréfas</Form.Label>
        <Form.Control type="email" placeholder="Entre com a tarefa" />
      </Form.Group>
      <Form.Select aria-label="Select Status">
        <option>Escolha sua opção</option>
        <option value="pending">Pendente</option>
        <option value="inProgress">Em Andamento</option>
        <option value="finality">Finalizada</option>
      </Form.Select>
      <Button variant="primary" type="button">
        Adcionar
      </Button>
    </Form>
  );
}
