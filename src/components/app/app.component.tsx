import './app.styles.scss';
import { Routes, Route } from 'react-router-dom';
import { AppStatusBar, AppHeader, AppSideBar } from '../app';
import { Home, Connect } from '../'

export function App() {
  return (
    <div className='app'>
      <AppHeader />
      <div className='app__content'>
        <AppSideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='connect' element={<Connect />} />
        </Routes>
      </div>
      <AppStatusBar />
    </div>
)};
