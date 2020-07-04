import React, { useState } from 'react';

const RegisterForm = () => {
  return (
    <form>
      <label>Foxticket</label>
      <input type="text" required />
      <input type="submit" value="add user" />
    </form>
  );
};

export default RegisterForm;
