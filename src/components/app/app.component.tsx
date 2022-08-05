import './app.styles.scss';
import Auth from '../auth';
import Main from '../main';
import StatusBar from '../status-bar';

export function App() {
  return (
    <div className="breacher">
      <h1>Breacher::MongoDb</h1>
      <Main />
      <Auth />
      <StatusBar />
    </div>
)};
