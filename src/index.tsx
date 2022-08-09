import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import './index.scss';
import { App } from './components';
import reportWebVitals from './report-web-vitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const socket: Socket = io('http://localhost:3003');

socket.on('connect', (): void => {
  console.log('Connected with socket.id:', socket.id);
  socket.emit('auth', socket.id);
  socket.on('disconnect', () => {
    console.log('Disconnected'); 
  });
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
