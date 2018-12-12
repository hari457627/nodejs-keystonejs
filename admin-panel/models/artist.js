var keystone = require('keystone');
var Types = keystone.Field.Types;


keystone.set('s3 config', {
	bucket: 'myfirstbucket11157',
	key: 'AKIAIW2D6B3AJ3GNYINA',
	secret: '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',
	region: 'ap-south-1'
});

/**
 * Artist Model
 * =============
 */

var artist = new keystone.List('artist');

// var storage = new keystone.Storage({
// 	adapter: require('keystone-storage-adapter-s3'),
// 	s3: {
// 		key: 'AKIAJ4NEV3T4LEWP5DHQ', // required; defaults to process.env.S3_KEY
// 		secret: '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', // required; defaults to process.env.S3_SECRET
// 		bucket: 'myfirstbucket11157', // required; defaults to process.env.S3_BUCKET
// 		headers: {
// 			'x-amz-acl': 'public-read', // add default headers; see below for details
// 		},
// 	},
// 	schema: {
// 		bucket: true, // optional; store the bucket the file was uploaded to in your db
// 		etag: true, // optional; store the etag for the resource
// 		url: true, // optional; generate & store a public URL
// 	},
// });

artist.add({
	name: {
		type: String, required: true
	},
	email: {
		type: Types.Email, required: true,initial: true
	},
	password: {
		type: Types.Password, required: true,initial: true
	},
	mobile : {
		type : String, required: true,initial: true
	},
	description : {
		type: String, required : true,initial: true
	},
	price : {
		type: Number, required : true,initial: true
	},
	profilepic: {
		 type: Types.S3File ,
		 headers: {
			'x-amz-acl': 'public-read',
		},
	},
	update_at: {
		type: Date,
		default: Date.now()
	},
	approved: {
		type: Boolean,
		default: false
	}
});

artist.defaultSort = '-update_at';
artist.defaultColumns = 'name, email, mobile, price, update_at, approved';
artist.register();


