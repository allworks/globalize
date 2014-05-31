define([
	"./throw-error"
], function( throwError ) {

return function( code, message, check, attributes ) {
	if ( !check ) {
		throwError( code, message, attributes );
	}
};

});
