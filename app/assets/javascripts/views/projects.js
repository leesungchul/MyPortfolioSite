MySite.Views.Projects = Backbone.View.extend ({
	template: JST['projects/projects'],

	render: function() {
		$('body').removeClass();
		$('body').addClass('projects');
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});