MySite.Views.Contact = Backbone.View.extend({
	template: JST['static_pages/contact'],

	events: {
		'click #contact-form-submit': 'submitContact'
	},

	render: function() {
		$('body').removeClass();
		$('body').addClass('contact');
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	submitContact: function(event) {
		var that = this;
		event.preventDefault();
		var data = { name: this.$('#name').val(),
			email: this.$('#email').val(),
			phone: this.$('#phone').val(),
			message: this.$('#message').val()
		};
		$.ajax({
			type: "post",
			url: "/contact_email",
			data: data,
			success: function(response) {
				that.$('#contact-form-header')
					.empty()
					.prepend('<div><h2>Your message has been sent</h2></div>')
			}
		})
	}
});