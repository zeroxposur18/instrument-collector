import React from 'react';
import {Link} from 'react-router-dom'
const Instrument = () => {
  return (
    <React.Fragment>
      <h3>This is the Instrument Component.</h3>
      <div><Link to='/collectionlist' className='NavBar-link'>Collections List</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/instrumentlist' className='NavBar-link'>Instruments List</Link>
      </div>
      <p>It is located at src/components/Instrument/Instrument.jsx</p>
    </React.Fragment>
  );
}
export default Instrument;