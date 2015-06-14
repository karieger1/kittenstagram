var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var imagemodel = require('../models/imagemodel.js');

module.exports = Backbone.Collection.extend({
	model: imagemodel,
	url: "http://tiny-pizza-server.herokuapp.com/collections/tacotown/",
});