import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import InstrumentsSecretPage from '../InstrumentsSecretPage/InstrumentsSecretPage'
import * as instrumentAPI from '../../services/instrument-api';
import * as userAPI from '../../services/user-api';
import * as collectionAPI from '../../services/collection-api';
import Instrument from '../../components/Instrument/Instrument';
import NavBar from '../../components/NavBar/NavBar';
import AddInstrumentPage from '../AddInstrumentPage/AddInstrumentPage';
import AddCollectionPage from '../AddCollectionPage/AddCollectionPage';
import InstrumentsListPage from '../InstrumentListPage/InstrumentListPage';
import CollectionListPage from '../CollectionsListPage/CollectionListPage';
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
    }), this.props.history.push('/'));
  }

  handleDeleteInstrument = async id => {
    await instrumentAPI.deleteOne(id);
    this.setState(state => ({
      instruments: this.state.instruments.filter( i => i._id !== id)
    }), () => this.props.history.push('/'));
    }
  

  handleAddCollection = async newCollectionData => {
    const newCollection = await collectionAPI.create(newCollectionData);
    this.setState(state => ({
      collections: [...state.collections, newCollection]
    }), this.props.history.push('/'));
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
        <h1>Welcome to Instrument Collector</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
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
            instruments ={this.state.instruments}
            handleDeleteInstrument={this.handleDeleteInstrument}
          />  
        } 
        />
          <Route exact path='/collectionlist' render={() =>
          <CollectionListPage />
          }
          />
          <Route exact path='/addcollection' render={() =>
          userAPI.getUser() ?
          <AddCollectionPage
            handleAddCollection = {this.handleAddCollection}
            />
            :
            <Redirect to='/login'/>  
        } />
          <Route exact path='/addinstrument' render={() => 
            userAPI.getUser() ? 
              <AddInstrumentPage
                handleAddInstrument = {this.handleAddInstrument}
               />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/' render={() =>
            <Instrument />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
