import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/Login';
import User from '../pages/User';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/user" element={ <User /> } />
    </Routes>
  );
}
