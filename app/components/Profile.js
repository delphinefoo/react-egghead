import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://github-notepad.firebaseio.com/');

class Profile extends React.Component{
  //in es6, this is a method that is called when
  //class is instantiated
  //always pass constructor props
  //and then call super with props inside constructor
  //you can't use 'this' keyword inside a constructor
  //before you call super, passi'ng in 'props
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }


  componentDidMount() {
    //ajax requests will go here
    this.init(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  init(username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
      .then(function(data) {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      }.bind(this));
  }

  handleAddNote(newNote) {
    //update firebase with the newNote
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
          username = {this.props.params.username}
          notes =  {this.state.notes}
          addNote = {(newNote) => this.handleAddNote(newNote)} />
        </div>
      </div>
    );
  }
}

export default Profile;