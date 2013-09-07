requirejs.config(
	{
		shim: {
			"util/backbone": {
				deps: ["util/jquery", "util/underscore"],
				exports: "Backbone"
			},
			"util/bootstrap": {
				deps: ["util/jquery"]
			},
			"util/jquery": {
				exports: "$"
			},
			"util/underscore": {
				exports: "_"
			}
		}
	}
);

require(

	["util/jquery", "util/bootstrap", "util/underscore", "util/backbone", "util/mustache",
		"text!templates/hello.mustache"],

	function ($, bootstrapUndefined, _, Backbone, Mustache, hello) {

		$(document).ready(
			function () {
				console.log("Document has fired the 'ready' event.");
				$("#hello").html(Mustache.render(hello, {name: "world"}));
			}
		);

	}

);
