var ProgressBar = Loader.extend({
    className: "notification progress",
    update: function (percent) {
        this.$el.find("em").width(percent + "%");
        return this;
    }
});
