import './app.styles.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppStatusBar, AppHeader, AppSidebar } from '../app';
import { Home, Breaches, Collections, Documents } from '../../components'

export function App() {

  useEffect(() => {
    console.log('App Started');
  }, []);

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
