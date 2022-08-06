import './app.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import StatusBar from '../status-bar';

export function App() {
  return (
    <div className="breacher">
      <h1>Breacher::MongoDb</h1>
      <nav>
        <Link to="/main">Main</Link> | {" "}
        <Link to="/auth">Auth</Link>
      </nav>
      <Outlet />
      <StatusBar />
    </div>
)};
