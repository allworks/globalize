define(function() {

/**
 * Function inspired by jQuery Core, but reduced to our case.
 */
return function( obj ) {
	return obj !== null && "" + obj === "[object Object]";
};

});
