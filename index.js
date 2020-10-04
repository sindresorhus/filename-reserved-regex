/* eslint-disable no-control-regex */
'use strict';
module.exports = () => /[<>:"/\\|?*\u0000-\u001F]/g;
module.exports.windowsNames = () => /^(con|prn|aux|nul|com\d|lpt\d)$/i;
