#!/usr/bin/env node
'use strict';
const sindreModulePaths = require('./')

sindreModulePaths()
  .then((paths) => {
    console.log(paths)
  })
  .catch((er) => {
    console.error(er)
  })
