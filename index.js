'use strict';
module.exports = function () {
	return /[<>:"\/\\|?*\x00-\x1F]/g;
};
