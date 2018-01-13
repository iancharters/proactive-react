// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

import style from './root.scss';

console.log(style)

const Root = () =>
<div className={style.test}>
  RootRootRootRootRoot
</div>;

Root.displayName = 'App/Root';

export default Root;
