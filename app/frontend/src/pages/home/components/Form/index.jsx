import React, { useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Context } from '../../../../Context';
import { getUser } from '../../../../services/localStorage';
import { apiPost, apiPut } from '../../../../services/api';

export default function Forms() {
  const { isEdit, setIsEdit, task,
    setTask, isRender, setIsRender } = useContext(Context);

  const createTask = async (event) => {
    event.preventDefault();
    try {
      const { token } = getUser();
      await apiPost('/tasks', task, { headers: { Authorization: token } });
      setTask({ title: '', content: '', status: 'Pendente' });
      setIsEdit(false);
      setIsRender(!isRender);
    } catch (error) {
      // eslint-disable-next-line no-alert
      window.alert(error.message);
    }
  };

  const updateTask = async (event) => {
    event.preventDefault();
    const { id, title, content, status } = task;
    try {
      const { token } = getUser();
      await apiPut('/tasks',
        id,
        { title, content, status },
        { headers: { Authorization: token } });
      setTask({ title: '', content: '', status: 'Pendente' });
      setIsEdit(false);
      setIsRender(!isRender);
    } catch (error) {
      // eslint-disable-next-line no-alert
      window.alert(error.message);
    }
  };

  const cancelEdit = () => {
    setTask({ title: '', content: '', status: 'Pendente' });
    setIsEdit(false);
  };

  return (
    <Form className={ isEdit ? 'task-form-edit task' : 'task-form task' }>
      <Row className="align-items-center">
        <Col xl="auto" className="my-1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={ task.title }
            onChange={ (event) => setTask({ ...task, title: event.target.value }) }
          />
        </Col>

        <Col xl={ 6 } className="my-1">
          <Form.Label>Tarefas</Form.Label>
          <Form.Control
            value={ task.content }
            onChange={ (event) => setTask({ ...task, content: event.target.value }) }
          />
        </Col>

        <Col sm="auto" className="my-1">
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={ task.status }
            onChange={ (event) => setTask({ ...task, status: event.target.value }) }
          >
            <option value="Pendente">Pendente</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Concluido">Concluido</option>
          </Form.Select>
        </Col>

        <Col sm="auto" className="my-1" style={ { alignSelf: 'end' } }>
          <Button
            variant="success"
            onClick={ isEdit ? updateTask : createTask }
          >
            <i className="bi bi-file-earmark-plus-fill" />
          </Button>
          { ' ' }
          <Button
            disabled={ !isEdit }
            variant="danger"
            onClick={ cancelEdit }
          >
            <i className="bi bi-x-square" />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
