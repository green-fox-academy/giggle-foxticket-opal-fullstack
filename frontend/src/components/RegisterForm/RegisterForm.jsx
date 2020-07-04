import React, { useState } from 'react';

const RegisterForm = () => {
  const [username, setUserName] = useState('');
  const handleSubmit = e => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <label>Foxticket</label>
      <input
        type="text"
        value={username}
        required
        onChange={e => setUserName(e.target.value)}
      />
      <input type="submit" value="add user" />
    </form>
  );
};

export default RegisterForm;
