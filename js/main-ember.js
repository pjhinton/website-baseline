requirejs.config(
	{
		shim: {
			"util/handlebars": {
				exports: "Handlebars"
			},
			"util/jquery": {
				exports: "$"
			},
			"util/bootstrap": {
				deps: ["util/jquery"]
			},
			"util/ember": {
				exports: "Ember",
				deps: ["util/jquery"]
			}
		}
	}
);

require(

	["util/jquery", "util/bootstrap", "util/ember", "util/handlebars",
		"text!templates/hello.handlebars"],

	function ($, bootstrapUndefined, Ember, Handlebars, hello) {

		$(document).ready(
			function () {
				var template, context;

				console.log("Document has fired the 'ready' event.");
				template = Handlebars.compile(hello);
				context = {name: "world"};
				$("#hello").html(template(context));
			}
		);

	}

);
