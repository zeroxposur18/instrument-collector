import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/instrumentlist' className='NavBar-link'>Instruments List</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/addinstrument' className='NavBar-link'>Add Instrument!</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Logout</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'><Link to='/secretpage' className='NavBar-link'>Welcome</Link>, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/' className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>Login</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>Sign up</Link>
    </div>;
  return (
    <div className="NavBar">
      {nav}
    </div>
  );
};
export default NavBar;