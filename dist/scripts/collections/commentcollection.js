var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var commentmodel = require('../models/commentmodel.js');

module.exports = Backbone.Collection.extend({
	model: commentmodel,
	url: "http://tiny-pizza-server.herokuapp.com/collections/tacotown/",
});