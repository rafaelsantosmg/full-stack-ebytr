import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { getUser } from '../../../../services/localStorage';
import { Context } from '../../../../Context';

export default function Tables() {
  const { isRender } = useContext(Context);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const { token } = getUser();
      const { data } = await axios.get('http://localhost:3333/tasks', {
        headers: { Authorization: token },
      });
      setTasks(data);
    };
    getAll();
  }, [isRender]);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th className="thead-id">Id</th>
          <th className="thead-title">Título</th>
          <th className="thead-content">Tarefas</th>
          <th className="thead-status">Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        { tasks.length !== 0 && tasks.map((t) => (
          <tr className="tbody" key={ t.id }>
            <td className="tbody-id">{ t.id }</td>
            <td className="tbody-title">{ t.title }</td>
            <td className="tbody-content">{ t.content }</td>
            <td className="tbody-status">{ t.status }</td>
            <td className="tbody-buttons">
              <Button
                variant="success"
                onClick={ () => {} }
              >
                <i className="bi bi-pencil" style={ { fontSize: '20px' } } />
              </Button>
              { ' ' }
              <Button
                variant="danger"
                onClick={ () => {} }
              >
                <i className="bi bi-trash" style={ { fontSize: '20px' } } />
              </Button>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>
  );
}
