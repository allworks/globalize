define([
	"./validate"
], function( validate ) {

return function( parameter, parameterName ) {
	validate( "E_MISSING_PAR", "Missing required parameter `{parameter}`.", typeof parameter !== "undefined", {
		parameter: parameterName
	});
};

});
