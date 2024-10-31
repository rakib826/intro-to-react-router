import React from 'react';

const User = ({user}) => {
  const {id, name, email, phone} = user;
  return (
    <div className='p-4 bg-slate-100 m-2 b-2 border- rounded-lg' >
      <h2>{name}</h2>
      <p> {email} </p>
      <p> {phone} </p>
    </div>
  );
};

export default User;