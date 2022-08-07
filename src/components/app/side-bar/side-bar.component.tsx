import './side-bar.styles.scss';
import { Link } from 'react-router-dom';

export function AppSideBar() {
  return (
  <div className='app-side-bar'>
    <Link to='/home'>
      <i className='icon-database' />
    </Link>
    <Link to='/home'>
      <i className='icon-cubes' />
    </Link>
    <Link to='/home'>
      <i className='icon-cog-alt' />
    </Link>
    <Link to='/home'>
      <i className='icon-floppy' />
    </Link>
    <hr />
    <Link to='/home'>
      <i className='icon-plus' />
    </Link>
    <Link to='/home'>
      <i className='icon-pencil' />
    </Link>
    <Link to='/home'>
      <i className='icon-wrench' />
    </Link>
    <hr />
    <Link to='/home'>
      <i className='icon-lock' />
    </Link>
    <Link to='/home'>
      <i className='icon-arrows-cw' />
    </Link>
    <hr/>
    <Link to='/home'>
      <i className='icon-info' />
    </Link>
    <Link to='/home'>
      <i className='icon-bug' />
    </Link>
  </div>
)};
