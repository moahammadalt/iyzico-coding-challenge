import React, { Component } from 'react';
import Alert from 'react-s-alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/not_found';
import Header from './components/header';
import HomeContainer from './containers/home_con';
import CharacterDetailsContainer from './containers/character_details_con';

class App extends Component {
  
  render() {
    return (
      <div className="app-container">
        
        <Router>
          <React.Fragment>
            <Alert stack={{limit: 1}} effect='slide' beep={false} position='bottom-right' timeout={4000} html={true} />
            <Header />
            <React.Fragment>
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/character/:id" component={CharacterDetailsContainer} />
                <Route path='*' exact={true} component={NotFound} />
              </Switch>
            </React.Fragment>
          </React.Fragment>
        </Router>
        
      </div>
    );
  }
}

export default App;
