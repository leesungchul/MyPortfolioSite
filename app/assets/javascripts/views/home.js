MySite.Views.Home = Backbone.View.extend ({
	template: JST['static_pages/home'],

	render: function() {
		$('body').removeClass();
		$('body').addClass('home');
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});