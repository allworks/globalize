define([
	"./validate",
	"../util/to-string"
], function( validate, toString ) {

return function( value, name, check, expectedType ) {
	validate( "E_INVALID_PAR", "Invalid `{parameter}` parameter (" + toString( value ) + "). {expectedType} expected.", check, {
		parameter: name,
		expectedType: expectedType
	});
};

});
