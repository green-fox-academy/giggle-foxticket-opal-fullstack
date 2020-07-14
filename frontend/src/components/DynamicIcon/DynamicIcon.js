import React from 'react';
import * as fa from '@fortawesome/free-solid-svg-icons';

function GiveIcon({ icon }) {
  let iconToRender = fa[`${icon}`];
  console.log(fa['faAd']);

  return <>{React.createElement(iconToRender)}</>;
}

export default GiveIcon;
 