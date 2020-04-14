import React from 'react';
import './InstrumentListPage.css'
import InstrumentCard from '../../components/InstrumentCard/InstrumentCard'

function InstrumentListPage(props) {
    return (
        <>
        <h1>Instrument List</h1>
        <div className='InstrumentListPage'>
            {props.instruments.map(instrument =>
                <InstrumentCard
                key={instrument._id}
                instrument={instrument}
                handleDeleteInstrument={props.handleDeleteInstrument}
                />)}
        </div>
        </>
    )
}

export default InstrumentListPage;