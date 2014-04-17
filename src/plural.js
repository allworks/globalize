define([
	"./core",
	"./plural/form",
	"./message"
], function( Globalize, pluralForm ) {

/**
 * .formatPlural( value, data )
 *
 * @value [Number]
 *
 * @data [JSON] eg. { one: "{0} second", other: "{0} seconds" }
 *
 * Return the appropriate message based on value's plural group: zero | one |
 * two | few | many | other.
 */
Globalize.formatPlural =
Globalize.prototype.formatPlural = function( value, data ) {
	// FIXME Should we handle {0} substitution? If simple formatMessage is part of
	// core, it makes sense to:
	// return this.formatMessage( data[ this.plural( value ) ], value);
	return data[ this.plural( value ) ];
};

/**
 * .plural( value )
 *
 * @value [Number]
 *
 * Return the corresponding form (zero | one | two | few | many | other) of a
 * value given locale.
 */
Globalize.plural =
Globalize.prototype.plural = function( value ) {
	var form;

	if ( typeof value !== "number" ) {
		throw new Error( "Value is not a number" );
	}

	if ( !( form = pluralForm( value, this.cldr ) ) ) {
		throw new Error( "Plural form not found!" );
	}

	return form;
};

return Globalize;

});
