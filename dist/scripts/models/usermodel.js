var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		username: null,
		password: null,
		email: null,
		createdAt: now, 
		lastLogin: null
	},
	urlRoot: "http://tiny-pizza-server.herokuapp.com/collections/tacotown/",
	idAttribute: '_id'
});