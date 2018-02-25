requirejs.config(
	{
		shim: {
			"util/backbone": {
				deps: ["util/jquery", "util/underscore"],
				exports: "Backbone"
			},
			"util/bootstrap.bundle": {
				deps: ["util/jquery"]
			},
			"util/jquery": {
				exports: "$"
			},
			"util/underscore": {
				exports: "_"
			},
		}
	}
);

require(

	["util/jquery", "util/bootstrap.bundle", "util/underscore", 
        "util/backbone", "util/mustache", "util/fontawesome-all",
        "text!templates/hello.mustache"],

	function ($, bootstrapUndefined, _, Backbone, Mustache, fa, hello) {

		$(document).ready(
			function () {
				console.log("Document has fired the 'ready' event.");
				$("#hello").html(Mustache.render(hello, {name: "world"}));
			}
		);

	}

);
