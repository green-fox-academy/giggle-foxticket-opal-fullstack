import React from 'react';
import * as fa from 'react-icons/fa';

function GiveIcon({ icon }) {

  console.log(icon )
  let iconToRender = fa[`${icon}`];
  let iconToRender1 = fa[icon];
/*   let iconToRender = fa['FaDev'];
 */  console.log(iconToRender);
  console.log(iconToRender1);

  return <>{React.createElement(iconToRender)}</>;
}

export default GiveIcon;
