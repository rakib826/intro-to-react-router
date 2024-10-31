import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
  const users = useLoaderData();
  console.log(users)
  return (
    <div>
      <h2>Our Users: {users.length} </h2>
      <div className='grid md:grid-cols-3'>
        {
          users.map(user=> <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;