import React from 'react';
// import { Container } from 'react-bootstrap';
import Table from './components/Table';
import Forms from './components/Form';
import './styles/styles.css';

export default function Home() {
  return (
    <div className="home-page">
      <Forms />
      <Table />
    </div>
  );
}
