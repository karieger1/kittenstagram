var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var usermodel = require('../models/usermodel.js');

module.exports = Backbone.Collection.extend({
	model: usermodel,
	url: "http://tiny-pizza-server.herokuapp.com/collections/tacotown/",
});