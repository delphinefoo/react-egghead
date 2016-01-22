import React from 'react';

//if the component doesn't have state
//and has just a render method,
//you can make it a function instead of a
//class component

const Home = () => {
  return (
    <h2 className="text-center">
      Search by Github Username Above
    </h2>
  );
}

export default Home;