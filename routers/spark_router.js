App.Routers.Spark = Backbone.Router.extend({

	routes: {
		"":            "index", //index.html default
		"!/help":      "help"
  	},

	index: function() {
		var spkModel = new App.Models.Spark();
		
		// model.fetch will create get request to model.url by using jQuery.
		spkModel.fetch(
		    { success: function(data) { new App.Views.Spark({ model: data }); }},
		    { error: function(data) { alert("error"); }}
	    );
	},
	
	help: function() {
		var spkModel = new App.Models.Spark();
		model2.fetch({ error: function(model){ alert("error"); }});
		new App.Views.Workspace({ model: model2 });
	}

});