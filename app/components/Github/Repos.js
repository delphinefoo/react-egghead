import React from'react';

class Repos extends React.Component{
  render() {
    //React requires you to have a key on all items in an array in the view
    //The '&&' below is actually the equivalent of an if statement:
    //if the first portion, then do the second portion
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {this.props.repos.map((repo, index) => {
            return (
              <li className="list-group-item" key={index}>
                {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                {repo.description && <p> {repo.description} </p>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;