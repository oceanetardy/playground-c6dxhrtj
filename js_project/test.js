var toUpper = require('./uppercase.js');
var assert  = require('assert');

it('should return HELLO', function() {
	assert.equal('HELLO', toUpper('hello'));
});

it('should return WORLD', function() {
	assert.equal('WORLD', toUpper('world'));
});
