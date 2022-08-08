import './app.styles.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { AppStatusBar, AppHeader, AppSidebar } from '../app';
import { Home, Breaches, Collections, Documents } from '../../components'

export function App() {
  useEffect(() => {
    console.log('App Started');
    connect();
  }, []);

  function connect() {
    try {
      const socket: Socket = io('http://127.0.0.1:3003');
      console.log('App Socket', socket);
      socket.on('connect', () => {
        console.log('Connected with socket.id:', socket.id);
        socket.emit('auth', socket.id);
      });
      socket.on('disconnect', () => {
        console.log('Disconnected'); 
      });
    } catch(e) {
      console.log(e)
    } 
  }

  return (
    <div className='app'>
      <AppHeader />
      <div className='app__content'>
        <AppSidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='breaches' element={<Breaches />} />
          <Route path='collections' element={<Collections />} />
          <Route path='documents' element={<Documents />} />
        </Routes>
      </div>
      <AppStatusBar />
    </div>
)};
