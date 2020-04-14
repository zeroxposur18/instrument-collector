import React, {Component} from 'react';

class AddCollectionPage extends Component {
    state ={
        invalidForm: true,
        formData :{
            label:''
        }
    };

    formRef = React.createRef();
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddCollection(this.state.formData);
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
                <h1>Add Collection</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name of Collection</label>
                        <input
                            className="form-control"
                            name="label"
                            value={this.state.formData.label}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        Add Collection
                    </button>
                </form>
            </>
        )
    }
}

export default AddCollectionPage;