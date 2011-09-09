App.Views.Spark = Backbone.View.extend({
    el: $("#wrapper"),
    
    events: {
        "click #btnStart": "gotoPretest",
    },

    initialize: function () {
        _.bindAll(this, "render", "gotoPretest");

        this.render();
    },

    render: function () {
        // alert(JSON.stringify(this.model));
        
        // defaine mo for using in $.ajax().
        var mo = this.model.toJSON();
        
        // how to using Mustache.js to as template to render?
        $.ajax({
            url: "templates/spark.mustache",
            context: document.body,
            success: function(template){
                var html = Mustache.to_html(template, mo).replace(/^\s*/mg, '');
                $("#wrapper").append(html);
            }
        });
        
        return this; // for chainable calls, like .render().el
    },
    
    gotoPretest: function () {
        alert("go to pretest");
    }
});