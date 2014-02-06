var Loader = Notification.extend({

    className: "notification loader",

    render: function () {
        this.$el
            .html(this.text)
            .append($("<em>"));
            // we have to create an inline element, because
            // css3 animations doesn't work with pseudo
            // elements on webkit based browsers.
        return this;
    },

    finish: function () {
        var _this = this;
        this.$el.fadeOut("fast", function () {
            _this.$el.remove();
        });
    }

});
