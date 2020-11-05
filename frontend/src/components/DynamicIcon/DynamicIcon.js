import React from 'react';
import * as fa from 'react-icons/fa';

function DynamicIcon({ icon }) {
  console.log('dynamicIconba icon', icon);
  let iconToRender = fa[icon] || 'faBeer';

  return React.createElement(iconToRender);
}

export default DynamicIcon;
