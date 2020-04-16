import React from 'react';
import './InstrumentListPage.css'
import InstrumentCard from '../../components/InstrumentCard/InstrumentCard'

function InstrumentListPage(props) {
    return (
        <>
        <h1 className="blue-grey darken-2 white-text">Instrument List</h1>
        <div className="row">
        <div className="col s15">
        <div className='InstrumentListPage'>
            {props.instruments.map(instrument =>
                <InstrumentCard
                className="card blue-grey darken-1"
                key={instrument._id}
                instrument={instrument}
                user={props.user}
                handleDeleteInstrument={props.handleDeleteInstrument}
                />)}
                </div>
                </div>
        </div>
        </>
    )
}

export default InstrumentListPage;