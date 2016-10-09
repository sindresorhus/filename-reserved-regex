'use strict';
module.exports = () => /[<>:"\/\\|?*\x00-\x1F]/g;
module.exports.windowsNames = () => /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
