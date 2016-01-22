import React from 'react';
import SearchGithub from './SearchGithub';

class Main extends React.Component{
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub history={this.props.history}/>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

//this.props.children gets replaced with active component
//this.props.history: can't use mixins with React. Router passes methods
//to the component Main in routes.js, and we are passing the method 'history'
//on to SearchGithub from parent Main here.

export default Main;