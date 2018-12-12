var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Equipment Model
 * =============
 */

var equipments = new keystone.List('equipments');

equipments.add({
	name: {
		type: String, required: true,initial: true
	},
	description : {
		type: String, required : true,initial: true
	},
	Rent_price : {
		type : Number, required : true,initial: true
	},
	update_at: {
		type: Types.Datetime
	},
	completed: {
		type: Boolean,
		default: false
	}
});

equipments.defaultSort = '-name,-update_at,-venue';
equipments.defaultColumns = 'name,update_at,venue';
equipments.register();
