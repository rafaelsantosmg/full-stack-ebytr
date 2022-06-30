import axios from 'axios';
import React, { useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Context } from '../../../../Context';
import { getUser } from '../../../../services/localStorage';

export default function Forms() {
  const { isEdit, setIsEdit, task, setTask, isRender, setIsRender } = useContext(Context);
  const createTask = async (event) => {
    event.preventDefault();
    const { token } = getUser();
    await axios.post('http://localhost:3333/tasks', task, { headers: { Authorization: token } });
    setTask({ title: '', content: '', status: 'Pendente' });
    setIsEdit(false);
    setIsRender(!isRender);
  };

  return (
    <Form className={ isEdit ? 'task-form-edit' : 'task-form' }>
      <Row className="mb-3">
        <Form.Group as={ Col } controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={ task.title }
            onChange={ (event) => setTask({ ...task, title: event.target.value }) }
          />
        </Form.Group>

        <Form.Group as={ Col } controlId="formGridTarefas">
          <Form.Label>Tarefas</Form.Label>
          <Form.Control
            value={ task.content }
            onChange={ (event) => setTask({ ...task, content: event.target.value }) }
          />
        </Form.Group>

        <Form.Group as={ Col } controlId="formGridStatus">
          <Form.Label>Status</Form.Label>
          <Form.Select
            defaultValue="Pendente"
            value={ task.status }
            onChange={ (event) => setTask({ ...task, status: event.target.value }) }
          >
            <option>Selecione...</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Pendente">Pendente</option>
            <option value="Concluido">Concluido</option>
          </Form.Select>
        </Form.Group>

        <Button
          className="add-task"
          variant="success"
          onClick={ createTask }
        >
          <i className="bi bi-file-earmark-plus-fill" style={ { fontSize: '20px' } } />
        </Button>
      </Row>
    </Form>
  );
}
