import React from 'react';
import SearchGithub from './SearchGithub';

//Main is passed props, and the parameters
//inside curly braces are the properties of props
//This is a feature of es6 called 'destructuring' objects
const Main = ({history, children}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub history={history}/>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
};


//this.props.children gets replaced with active component
//this.props.history: can't use mixins with React. Router passes methods
//to the component Main in routes.js, and we are passing the method 'history'
//on to SearchGithub from parent Main here.

export default Main;