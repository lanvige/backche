window.App = {

    Models: {},
    Views: {},
    Routers: {},
    Collections: {},

    initialize: function () {
        new App.Routers.Spark();
        Backbone.history.start();
    }
};