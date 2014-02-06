MySite.Views.About = Backbone.View.extend({
	template: JST['static_pages/about'],

	render: function() {
		$('body').removeClass();
		$('body').addClass('about');
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});