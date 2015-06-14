var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		username: null,
		imageURL: null,
		caption: null,
		createdAt: now,
		numLikes: 0
	},
	urlRoot: "http://tiny-pizza-server.herokuapp.com/collections/tacotown/",
	idAttribute: '_id'
});