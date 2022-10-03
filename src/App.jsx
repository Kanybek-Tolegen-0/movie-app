import React from 'react';
import './index.css';
import { NavBar } from './components/molecules';

export const App = () => {
  return (
    <div className="App">
      <NavBar style={{ padding: '64px 16px' }}/>
    </div>
  );
}
