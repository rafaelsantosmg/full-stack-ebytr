import React from 'react';
import { Button } from 'react-bootstrap';

export default function Table() {
  const tasks = [{ id: 1, title: 'teste', task: 'Teste', status: 'pendente' }];
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Tarefas</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        { tasks.map((task) => (
          <tr key={ task.id } className="table-active">
            <td>{task.id}</td>
            <td>{ task.title }</td>
            <td>{ task.task }</td>
            <td>{ task.status }</td>
            <td>
              <Button
                type="button"
                btnClass="btn btn-dark"
                dataTestId="edit-btn"
                onChangeClick={ () => onChangeEdit(task.id) }
              >
                <i className="bi bi-pencil-square" style={ { fontSize: '20px' } } />
              </Button>
              { ' ' }
              <Button
                type="button"
                btnClass="btn btn-dark"
                dataTestId="delete-btn"
                onChangeClick={ () => {} }
              >
                <i className="bi bi-journal-x" style={ { fontSize: '20px' } } />
              </Button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
