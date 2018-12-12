var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Model
 * =============
 */

var events = new keystone.List('events');

events.add({
	name: {
		type: String, required: true, initial: true
	},
	description : {
		type: String, required : true, initial: true
	},
	type: {
		type: String, required: true, initial: true
	},
	date: {
		type: Types.Datetime, required: true, initial: true
	},
	Venue: {
		type: String, required: true, initial: true
	},
	tickets: {
		type: Number, required: false, initial: true
	},
	approved: {
		type: Boolean,
		default: false
	}
});

events.defaultSort = '-name,-date';
events.defaultColumns = 'name,description,date';
events.register();
