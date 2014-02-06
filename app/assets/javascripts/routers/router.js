MySite.Routers.Router = Backbone.Router.extend ({

	initialize: function(options) {
		this.$main = options.$main;
	},

	routes: {
		"": "home",
		"contact": "contact",
		"about": "about",
		"projects": "projects",
		"arlite": "arlite",
		"planit": "planit"
	},

	home: function() {
		var homeView = new MySite.Views.Home();
		this._swapView(homeView)
	},

	contact: function() {
		var contactView = new MySite.Views.Contact();
		this._swapView(contactView)

	},

	about: function() {
		var aboutView = new MySite.Views.About();
		this._swapView(aboutView)
	},

	projects: function() {
		var projectView = new MySite.Views.Projects();
		this._swapView(projectView)
	},

	arlite: function() {
		var arliteView = new MySite.Views.Arlite();
		this._swapView(arliteView)
	},

	planit: function() {
		var planitView = new MySite.Views.Planit();
		this._swapView(planitView)
	},

	_swapView: function(view) {
		this.$main._currentView && this.$main._currentView.remove();
		this.$main._currentView = view;
		this.$main.html(view.render().$el);
	}
});