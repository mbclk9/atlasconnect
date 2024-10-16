import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kullanıcı Yönetim Sistemi</h1>
      <UserList/>
      <UserForm/>
    </div>
  );
}

export default App;
