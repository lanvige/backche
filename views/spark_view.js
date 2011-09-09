App.Views.Spark = Backbone.View.extend({
    el: jQuery("#warpper"),

    events: {
        "click #btnStartLevelTest": "gotoPretest",
    },

    initialize: function () {
        _.bindAll(this, "render", "gotoPretest");
        this.render();
    },

    render: function () {
        // alert(JSON.stringify(this.model));

        // how to using Mustache.js to as template to render?
        
        return this; // for chainable calls, like .render().el
    },

    gotoPretest: function () {
        alert("go to pretest");
    }
});