import axios from 'axios';

function getRepos(username){
  //this is called a string literal in es2015
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

//const is read-only -- cannot reassign 'helpers'
export default function getGithubInfo(username){
  //axios.all takes an array of promises
  //and will call then when all the promises are resolved
  return axios.all([getRepos(username), getUserInfo(username)])
    //the order of the returned data is the same order as in the array
    .then((arr) => ({repos: arr[0].data, bio: arr[1].data}));
}
