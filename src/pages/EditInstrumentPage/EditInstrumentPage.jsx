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
        <h1>Edit Puppy</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Instrument's Brand (required)</label>
            <input
              className="form-control"
              name="brand"
              value={this.state.formData.brand}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Instrument's Model (required)</label>
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