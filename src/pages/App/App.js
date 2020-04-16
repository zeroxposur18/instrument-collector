import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import * as instrumentAPI from '../../services/instrument-api';
import * as userAPI from '../../services/user-api';
import Instrument from '../../components/Instrument/Instrument';
import NavBar from '../../components/NavBar/NavBar';
import AddInstrumentPage from '../AddInstrumentPage/AddInstrumentPage';
import InstrumentsListPage from '../InstrumentListPage/InstrumentListPage';
import EditInstrumentPage from '../EditInstrumentPage/EditInstrumentPage';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    collection: [],
    instruments: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  handleAddInstrument = async newInstrumentData => {
    const newInstrument = await instrumentAPI.create(newInstrumentData);
    this.setState(state => ({
      instruments: [...state.instruments, newInstrument]
    }), this.props.history.push('/instrumentlist'));
  }

  handleDeleteInstrument = async id => {
    await instrumentAPI.deleteOne(id);
    this.setState(state => ({
      instruments: state.instruments.filter( i => i._id !== id)
    }), () => this.props.history.push('/instrumentlist'));
  }
  
  handleUpdateInstrument = async updateInstrumentData => {
    const updateInstrument = await instrumentAPI.update(updateInstrumentData);
    const newInstrumentArray = this.state.instruments.map( i =>
      i._id === updateInstrument._id ? updateInstrument : i);
    this.setState(
      {instruments: newInstrumentArray},
      () => this.props.history.push('/instrumentlist')
    );
  }



  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const instruments = await instrumentAPI.index();
    this.setState({ instruments });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Instrument Collector</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />

          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/instrumentlist' render={(history) =>
          <InstrumentsListPage 
            user={this.state.user}
            instruments ={this.state.instruments}
            handleDeleteInstrument={this.handleDeleteInstrument}
          />  
        } 
        />
          <Route exact path='/addinstrument' render={() => 
            userAPI.getUser() ? 
              <AddInstrumentPage
                handleAddInstrument = {this.handleAddInstrument}
               />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/edit' render={({location}) =>
            <EditInstrumentPage 
              handleUpdateInstrument={this.handleUpdateInstrument}
              location = {location}
            /> 
          }/>
          <Route exact path='/' render={() =>
            <Instrument />
          }/>

      </div>
    );
  }
}

export default App;
