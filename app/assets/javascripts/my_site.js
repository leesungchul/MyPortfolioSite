window.MySite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new MySite.Routers.Router({ $main: $('#main')});
		Backbone.history.start();
  }
};

$(document).ready(function(){
  MySite.initialize();
});
