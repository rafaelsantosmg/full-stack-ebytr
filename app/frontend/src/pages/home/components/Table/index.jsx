import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Context } from '../../../../Context';
import { getUser } from '../../../../services/localStorage';
import { apiGet, apiGetById, apiDelete } from '../../../../services/api';

const NUMBER_SORT = -1;
const styleThrough = 'line-through';

export default function Tables() {
  const { isRender, setIsEdit, setTask, setIsRender, isEdit } = useContext(Context);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const { token } = getUser();
        const { data } = await apiGet('/tasks', {
          headers: { Authorization: token },
        });
        setTasks(data);
      } catch (error) {
        // eslint-disable-next-line no-alert
        window.alert(error.message);
      }
    };
    getAll();
  }, [isRender]);

  const updateTask = async (id) => {
    setIsEdit(true);
    const { token } = getUser();
    const { data } = await apiGetById('/tasks', id, {
      headers: { Authorization: token },
    });
    setTask(data);
  };

  const deleteTask = async (id) => {
    const { token } = getUser();
    await apiDelete('/tasks', id, {
      headers: { Authorization: token },
    });
    setIsRender(!isRender);
  };

  const sortTasks = (type) => {
    const sortTask = [...tasks]
      .sort((taskA, taskB) => (taskA[type] > taskB[type] ? 1 : NUMBER_SORT));
    setTasks(sortTask);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th
            style={ { cursor: 'pointer' } }
            aria-hidden
            onClick={ () => sortTasks('title') }
          >
            Título
          </th>
          <th>Tarefas</th>
          <th
            style={ { cursor: 'pointer' } }
            aria-hidden
            onClick={ () => sortTasks('status') }
          >
            Status
          </th>
          <th
            style={ { cursor: 'pointer' } }
            aria-hidden
            onClick={ () => sortTasks('published') }
          >
            Data Criação
          </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        { tasks.length !== 0 && tasks.map((t) => (
          <tr key={ t.id }>
            <td
              style={ { textDecorationLine: t.status === 'Concluido' && styleThrough } }
            >
              { t.title }
            </td>
            <td
              style={ { textDecorationLine: t.status === 'Concluido' && styleThrough } }
            >
              { t.content }
            </td>
            <td
              style={ { textDecorationLine: t.status === 'Concluido' && styleThrough } }
            >
              { t.status }
            </td>
            <td
              style={ { textDecorationLine: t.status === 'Concluido' && styleThrough } }
            >
              { t.published.split('-').reverse().join('/') }
            </td>
            <td style={ { textAlign: 'center' } }>
              <Button
                disabled={ t.status === 'Concluido' ? true : isEdit }
                variant="success"
                onClick={ () => updateTask(t.id) }
              >
                <i className="bi bi-pencil" />
              </Button>
              { ' ' }
              <Button
                variant="danger"
                onClick={ () => deleteTask(t.id) }
              >
                <i className="bi bi-trash" />
              </Button>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>
  );
}
