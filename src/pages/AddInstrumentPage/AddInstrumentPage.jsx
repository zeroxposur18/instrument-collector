import React, {Component} from 'react';

class AddInstrumentPage extends Component {
    state ={
        invalidForm: true,
        formData :{
            brand:'',
            model:'',
            years: 0
        }
    };

    formRef = React.createRef();
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddInstrument(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>Add Instrument</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Instrument's Brand</label>
                        <input
                            className="form-control"
                            name="brand"
                            value={this.state.formData.brand}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Instrument's Model</label>
                        <input
                            className="form-control"
                            name="model"
                            value={this.state.formData.model}
                            onChange={this.handleChange}
                            required
                        />                                         
                    </div>
                    <div className="form-group">
                        <label>Year's owned</label>
                        <input
                            className="form-control"
                            name="years"
                            value={this.state.formData.years}
                            onChange={this.handleChange}
                            required
                        />                                         
                    </div>
                    <button 
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        Add Instrument
                    </button>
                </form>
            </>
        )
    }
}

export default AddInstrumentPage;