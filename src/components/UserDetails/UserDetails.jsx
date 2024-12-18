import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  const {name,website} = user;
  return (
    <div>
      <h1>About</h1>
      <h2>Details About User: {name}</h2>
      <p>Visit us: {website} </p>
    </div>
  );
};

export default UserDetails;