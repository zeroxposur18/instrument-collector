import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditInstrumentPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.instrument
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateInstrument(this.state.formData);
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
        <h1 className="blue-grey darken-2 white-text">Edit Instrument</h1>
        <form className="blue-grey darken-2 white-text" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="white-text">Instrument's Brand</label>
            <input
              className="form-control white-text"
              name="brand"
              value={this.state.formData.brand}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group white-text">
            <label className="white-text">Instrument's Model</label>
            <input
              className="form-control white-text"
              name="model"
              value={this.state.formData.model}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group white-text">
            <label className="white-text">Condition</label>
            <input
              className="form-control white-text"
              name="condition"
              value={this.state.formData.condition}
              onChange={this.handleChange}
              required
            />
          </div>          
          <div className="form-group white-text">
            <label className="white-text">Year's owned</label>
            <input
              className="form-control white-text"
              name="years"
              value={this.state.formData.years}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Save Instrument
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditInstrumentPage;