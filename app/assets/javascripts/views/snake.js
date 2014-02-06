MySite.Views.Snake = Backbone.View.extend ({
	id: 'board',

	template: JST['projects/snake'],

	render: function() {
		var content = this.template();
		this.$el.html(content)
		return this;
	}
});