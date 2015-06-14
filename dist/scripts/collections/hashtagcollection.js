var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var hashtagmodel = require('../models/hashtagmodel.js');

module.exports = Backbone.Collection.extend({
	model: hashtagmodel,
	url: "http://tiny-pizza-server.herokuapp.com/collections/tacotown/",
});