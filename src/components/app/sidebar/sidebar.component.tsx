import './sidebar.styles.scss';
import { NavLink } from 'react-router-dom';

export function AppSidebar() {
  return (
  <div className='app-sidebar'>
    <NavLink to='/breaches'>
      <i className='icon-database' />
    </NavLink>
    <NavLink to='/collections'>
      <i className='icon-cubes' />
    </NavLink>
    <NavLink to='/documents'>
      <i className='icon-cube' />
    </NavLink>
    <div className='app-sidebar__button disabled'>
      <i className='icon-arrows-cw' />
    </div>
    <hr />
    <div className='app-sidebar__button disabled'>
      <i className='icon-cog-alt' />
    </div>
    <div className='app-sidebar__button disabled'>
      <i className='icon-plus' />
    </div>
    <div className='app-sidebar__button disabled'>
      <i className='icon-pencil' />
    </div>
    <div className='app-sidebar__button disabled'>
      <i className='icon-wrench' />
    </div>
    <hr/>
    <a href='https://github.com/alexandr532/breacher-app/issues' target='_blank' rel='noopener noreferrer'>
      <i className='icon-bug' />
    </a>
    <hr />
    <div className='app-sidebar__button'>
      <i className='icon-lock' />
    </div>
  </div>
)};
