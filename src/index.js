import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';

ReactDOM.render(
  <Board knightPosition={[4,5]} />,
  document.getElementById('root')
);
