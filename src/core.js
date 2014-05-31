define([
	"cldr",
	"./common/validate-presence",
	"./common/validate-type",
	"./common/validate-type/locale",
	"./common/validate-type/plain-object",
	"./util/always-cldr",
	"./util/is-plain-object",
	"./util/object/keys"
], function( Cldr, validatePresence, validateType, validateTypeLocale, validateTypePlainObject, alwaysCldr, isPlainObject, objectKeys ) {

/**
 * [new] Globalize( locale|cldr )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Create a Globalize instance.
 */
function Globalize( locale ) {
	if ( !( this instanceof Globalize ) ) {
		return new Globalize( locale );
	}

	validatePresence( locale, "locale" );
	validateTypeLocale( locale, "locale" );

	this.cldr = alwaysCldr( locale );
}

/**
 * Globalize.load( json )
 *
 * @json [JSON]
 *
 * Load resolved or unresolved cldr data.
 * Somewhat equivalent to previous Globalize.addCultureInfo(...).
 */
Globalize.load = function( json ) {
	validatePresence( json, "json" );
	validateTypePlainObject( json, "json" );

	Cldr.load( json );
};

/**
 * Globalize.locale( [locale|cldr] )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Set default Cldr instance if locale or cldr argument is passed.
 *
 * Return the default Cldr instance.
 */
Globalize.locale = function( locale ) {
	validateTypeLocale( locale, "locale" );

	if ( arguments.length ) {
		this.cldr = alwaysCldr( locale );
	}
	return this.cldr;
};

/**
 * Optimization to avoid duplicating some internal functions across modules.
 */
Globalize._isPlainObject = isPlainObject;
Globalize._objectKeys = objectKeys;
Globalize._validatePresence = validatePresence;
Globalize._validateType = validateType;
Globalize._validateTypePlainObject = validateTypePlainObject;

return Globalize;

});
