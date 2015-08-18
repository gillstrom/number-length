'use strict';
module.exports = function (val) {
	if (typeof val !== 'number') {
		throw new TypeError('Expected a number');
	}

	return Math.abs(val).toString().split('.').join('').length;
};
