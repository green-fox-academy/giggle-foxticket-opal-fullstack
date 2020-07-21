import React from 'react';
import * as fa from 'react-icons/fa';

function GiveIcon({ icon }) {
  let iconToRender = fa[icon];

  return <>{React.createElement(iconToRender)}</>;
}

export default GiveIcon;
