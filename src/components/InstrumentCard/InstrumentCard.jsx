import React from 'react';
import { Link } from 'react-router-dom';

function InstrumentCard({instrument, handleDeleteInstrument, user}) {
    return (
        <div className='card blue-grey darken-1'>
            <div className="card-content white-text">
                <h3 className='card-title center'>{instrument.brand}</h3>
            <div className='blue-grey darken-2'>
                <div className='card-content white-text center'>
                    Model: {instrument.model}
                </div>
                <div className='card-content white-text center'>
                    Condition: {instrument.condition}
                </div> 
                <div className='card-content white-text center'>
                    Owner of Instrument: {instrument.ownerName}
                </div>                              
                <div className='card-content white-text center'>
                    Years Owned: {instrument.years}
                </div>           
            </div>
            <div className='card-action center'>
                {instrument.userId === user._id ?
                <Link
                className='btn btn-xs btn-warning'
                to={{
                    pathname: '/edit',
                    state: {instrument}
                }}
                >
                EDIT
                </Link>
                :
                <></>
            }   {instrument.userId === user._id ?
                <button
                className='btn btn-xs btn-warning'
                onClick={() => handleDeleteInstrument(instrument._id)}
                >
                    DELETE
                </button>
                :
                <></>
            }
            </div>
        </div>            
                    </div>
    )
}

export default InstrumentCard;