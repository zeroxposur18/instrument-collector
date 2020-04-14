import React from 'react';
import { Link } from 'react-router-dom';

function InstrumentCard({instrument, handleDeleteInstrument}) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{instrument.brand}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Model</dt>
                    <dd>{instrument.model}</dd>
                    <dt>year</dt>
                    <dd>{instrument.years}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/editinstrument',
                        state: {instrument}
                    }}
                >
                EDIT
                </Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteInstrument(instrument._id)}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default InstrumentCard;