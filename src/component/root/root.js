// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

import style from './root.scss';

console.log(process.env)

const Root = () =>
<div className={style.test}>
  RootRootRootRootRoot
</div>;

Root.displayName = 'App/Root';

export default Root;
