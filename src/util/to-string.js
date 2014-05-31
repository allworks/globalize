define(function() {

return function( variable ) {
	return JSON && JSON.stringify( variable ) || "" + variable;
};

});
