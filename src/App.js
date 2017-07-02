import React, { Component } from 'react';
import './App.css';
import {voteAngular, voteReact, voteVuejs} from './actions';

class App extends Component {
    constructor(props){
        super(props);
        this.store = this.props.store;
    }

    handleVoteAngular = () => {
        this.store.dispatch(voteAngular());
    };

    handleVoteReact = () => {
        this.store.dispatch(voteReact());
    };

    handleVoteVuejs = () => {
        this.store.dispatch(voteVuejs());
    };

  render() {
    return (
      <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src="learning_logo.png" height='96' alt="learningRedux"/>
          <h2>What is your favourite front-end framework ?</h2>
          <h4>Click on the below logos ti vote !</h4>
          <br/>
          <div className="row">
              <div className="col-xs-offset-3 col-xs-2">
                  <img src="angular_logo.png" height='96' alt="Angular" onClick={this.handleVoteAngular}/>
              </div>
              <div className="col-xs-2">
                  <img src="react_logo.png" height='96' alt="React" onClick={this.handleVoteReact}/>
              </div>
              <div className="col-xs-2">
                  <img src="vuejs_logo.png" height='96' alt="Vuejs" onClick={this.handleVoteVuejs}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
