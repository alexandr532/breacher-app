import './app.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import { AppStatusBar } from './status-bar';

export function App() {
  return (
    <div className="breacher">
      <h1>Breacher::MongoDb</h1>
      <nav>
        <Link to="/home">Home</Link> | {" "}
        <Link to="/connect">Connect</Link>
      </nav>
      <Outlet />
      <AppStatusBar />
    </div>
)};
