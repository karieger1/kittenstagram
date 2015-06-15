var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

	var App = Backbone.Router.extend({
		routes: {
			" ": 		"login",
			"login":    "login",
			"register": "register",
			"feed":     "feed" //home/feed
		},
	})

});