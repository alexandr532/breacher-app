import './sidebar.styles.scss';
import { Link } from 'react-router-dom';

export function AppSidebar() {
  return (
  <div className='app-sidebar'>
    <Link to='/breaches'>
      <i className='icon-database' />
    </Link>
    <Link to='/collections'>
      <i className='icon-cubes' />
    </Link>
    <Link to='/documents'>
      <i className='icon-cube' />
    </Link>
    <Link to='/'>
      <i className='icon-arrows-cw' />
    </Link>
    <hr />
    <Link to='/'>
      <i className='icon-cog-alt' />
    </Link>
    <Link to='/'>
      <i className='icon-plus' />
    </Link>
    <Link to='/'>
      <i className='icon-pencil' />
    </Link>
    <Link to='/'>
      <i className='icon-wrench' />
    </Link>
    <hr/>
    <Link to='/'>
      <i className='icon-bug' />
    </Link>
    <hr />
    <Link to='/'>
      <i className='icon-lock' />
    </Link>
  </div>
)};
