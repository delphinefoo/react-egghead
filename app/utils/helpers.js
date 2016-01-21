var axios = require('axios');

function getRepos(username){
  return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getGithubInfo: function(username){
    //axios.all takes an array of promises
    //and will call then when all the promises are resolved
    return axios.all([getRepos(username), getUserInfo(username)])
      .then(function(arr){
        return {
          //the order of the returned data is the same order as in the array
          repos: arr[0].data,
          bio: arr[1].data
        }
      })
  }
}

module.exports = helpers;