"use strict";

// Creating the application namespace
var directory = {
    models: {},
    views: {},
    utils: {}
};

// -------------------------------------------------- Utilities ---------------------------------------------------- //

// The Template Loader. Used to asynchronously load templates located in separate .html files
directory.utils.templateLoader = {

    templates: {},

    load: function(names, callback) {

        var deferreds = [],
            self = this;

        $.each(names, function(index, name) {
            deferreds.push($.get('tpl/' + name + '.html', function(data) {
                self.templates[name] = data;
            }));
        });

        $.when.apply(null, deferreds).done(callback);
    },

    get: function(name) {
        return this.templates[name];
    }

};

// Base de dados.
directory.utils.store = {

    prato: {},

    populate: function() {
        this.prato[1] = {id: 1, primeiro: 'Alheira no', ultimo: 'Forno', tipo_de_prato: 'Carnes', sugestId: null, sugestao: null, telemovel: '910425260', reportCount: 2};
        this.prato[2] = {id: 2, primeiro: 'Almondegas com', ultimo: 'Massa', tipo_de_prato: 'Carnes', sugestId: 1, sugestao: null, telemovel: '910425260', reportCount: 7};
        this.prato[3] = {id: 3, primeiro: 'Bifanas no', ultimo: 'Pão', tipo_de_prato: 'Carnes', sugestId: 2, sugestao: 'Saladas', telemovel: '910425260', reportCount: 0};
        this.prato[4] = {id: 4, primeiro: 'Bife a', ultimo: 'Portuguesa', tipo_de_prato: 'Carnes', sugestId: 2, sugestao: 'Saladas', telemovel: '910425260', reportCount: 1};
        this.prato[5] = {id: 5, primeiro: 'Bife com', ultimo: 'Cogumelos', tipo_de_prato: 'Carnes', sugestId: 2, sugestao: 'Saladas', telemovel: '910425260', reportCount: 1};
        this.prato[6] = {id: 6, primeiro: 'Bola de', ultimo: 'Carne', tipo_de_prato: 'Carnes', sugestId: 2, sugestao: 'Saladas', telemovel: '910425260', reportCount: 6};
        this.prato[7] = {id: 7, primeiro: 'Coelho', ultimo: 'Assado', tipo_de_prato: 'Carnes', sugestId: 6, sugestao: 'Saladas', telemovel: '910425260', reportCount: 6};
        this.prato[8] = {id: 8, primeiro: 'Costoletas de', ultimo: 'Porco', tipo_de_prato: 'Carnes', sugestId: 6, sugestao: 'Saladas', telemovel: '910425260', reportCount: 1};
        this.prato[9] = {id: 9, primeiro: 'Cozido à', ultimo: 'Portuguesa', tipo_de_prato: 'Carnes', sugestId: 2, sugestao: 'Saladas', telemovel: '910425260', reportCount: 1};
        this.prato[10] = {id: 10, primeiro: 'Empadão de', ultimo: 'Carne', tipo_de_prato: 'Carnes', sugestao: 'Saladas', telemovel: '910425260', reportCount: 2};
        this.prato[11] = {id: 11, primeiro: 'Almondegas de', ultimo: 'Peixe', tipo_de_prato: 'Peixe', sugestId: 10, sugestao: 'Saladas', telemovel: '910425260', reportCount: 1};
        this.prato[12] = {id: 12, primeiro: 'Arroz de', ultimo: 'Marisco', tipo_de_prato: 'Peixe', sugestId: 10, sugestao: 'Saladas', telemovel: '910425260', reportCount: 1};
        this.prato[13] = {id: 13, primeiro: 'Salmão', ultimo: 'Gratinado', tipo_de_prato: 'Peixe', sugestId: 2, sugestao: 'Saladas', telemovel: '910425260', reportCount: 1};
        this.prato[14] = {id: 14, primeiro: 'Arroz de', ultimo: 'Polvo', tipo_de_prato: 'Peixe', sugestId: 2, sugestao: 'Saladas', telemovel: '910425260', reportCount: 0};
        this.prato[15] = {id: 15, primeiro: 'Bacalhau com', ultimo: 'Broa', tipo_de_prato: 'Peixe', sugestId: 1, sugestao: 'Sopas', telemovel: '910425260', reportCount: 1};
        this.prato[16] = {id: 16, primeiro: 'Espetadas de', ultimo: 'Atum', tipo_de_prato: 'Peixe', sugestId: null, sugestao: 'Sopas', telemovel: '910425260', reportCount: 1};
        this.prato[17] = {id: 17, primeiro: 'Filetes de', ultimo: 'Pescada', tipo_de_prato: 'Peixe', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 1};
        this.prato[18] = {id: 18, primeiro: 'Hamburguer de', ultimo: 'Atum', tipo_de_prato: 'Peixe', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[19] = {id: 19, primeiro: 'Lasanha de', ultimo: 'Atum', tipo_de_prato: 'Peixe', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[20] = {id: 20, primeiro: 'Bacalhau com', ultimo: 'Natas', tipo_de_prato: 'Peixe', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[21] = {id: 21, primeiro: 'Salada de', ultimo: 'Bacalhau', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[22] = {id: 22, primeiro: 'Salada de', ultimo: 'Berinjela', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[23] = {id: 23, primeiro: 'Salada de', ultimo: 'Camarão', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[24] = {id: 24, primeiro: 'Salada de', ultimo: 'Frango', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[25] = {id: 25, primeiro: 'Salada', ultimo: 'Russa', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[26] = {id: 26, primeiro: 'Salada', ultimo: 'Tropical', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[27] = {id: 27, primeiro: 'Salada com', ultimo: 'Macarrão', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[28] = {id: 28, primeiro: 'Salada', ultimo: 'Natalina', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[29] = {id: 29, primeiro: 'Salada com', ultimo: 'Maionese', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[30] = {id: 30, primeiro: 'Salada de Grão de', ultimo: 'Bico', tipo_de_prato: 'Saladas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[31] = {id: 31, primeiro: 'Caldo', ultimo: 'Verde', tipo_de_prato: 'Sopas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[32] = {id: 32, primeiro: 'Canja de', ultimo: 'Galinha', tipo_de_prato: 'Sopas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[33] = {id: 33, primeiro: 'Sopa de', ultimo: 'Peixe', tipo_de_prato: 'Sopas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[34] = {id: 34, primeiro: 'Sopa à', ultimo: 'Lavrador', tipo_de_prato: 'Sopas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[35] = {id: 35, primeiro: 'Sopa de', ultimo: 'Cogumelos', tipo_de_prato: 'Sopas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};
        this.prato[36] = {id: 36, primeiro: 'Sopa de', ultimo: 'Cenoura', tipo_de_prato: 'Sopas', sugestId: 16, sugestao: 'Sopas', telemovel: '910425260', reportCount: 0};

    },

    findById: function(id) {
        return this.prato[id];
    },

    findAll: function() {
        return this.prato;
    },

    findByName: function(key) {
        var results = [];
        for (var id in this.prato) {
            if ( (this.prato[id].primeiro + " " + this.prato[id].ultimo).toLowerCase().indexOf(key.toLowerCase()) >= 0) {
                results.push(this.prato[id]);
            }
        }
        return results;
    },

    findByManager: function(sugestId) {
        var results = [];
        for (var id in this.prato) {
            if (this.prato[id].sugestId === sugestId) {
                results.push(this.prato[id]);
            }
        }
        return results;
    }

};

Backbone.sync = function(method, model, options) {

    var store = directory.utils.store;

    if (method === "read") {
        if (model.id) {
            options.success(store.findById(model.id));
        } else if (model.sugestId) {
            options.success(store.findByManager(model.sugestId));
        } else {
            options.success(store.findAll());
        }
    }

};

directory.models.Employee = Backbone.Model.extend({

    initialize: function() {
        this.reports = new directory.models.EmployeeCollection();
        this.reports.sugestId = this.id;
    }

});

directory.models.EmployeeCollection = Backbone.Collection.extend({

    model: directory.models.Employee,

    store: directory.utils.store,

    findByName: function(key) {
        this.reset(this.store.findByName(key));
    }

});


directory.views.SearchPage = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(directory.utils.templateLoader.get('pesquisa'));
    },

    render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        this.listView = new directory.views.EmployeeListView({el: $('ul', this.el), model: this.model});
        this.listView.render();
        return this;
    },

    events: {
        "keyup .search-key": "search"
    },

    search: function(event) {
        var key = $('.search-key').val();
        this.model.findByName(key);
    }
});

directory.views.DirectReportPage = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(directory.utils.templateLoader.get('sugestao'));
    },

    render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        this.listView = new directory.views.EmployeeListView({el: $('ul', this.el), model: this.model});
        this.listView.render();
        return this;
    }

});

directory.views.EmployeeListView = Backbone.View.extend({

    initialize: function() {
        this.model.bind("reset", this.render, this);
    },

    render: function(eventName) {
        $(this.el).empty();
        _.each(this.model.models, function(employee) {
            $(this.el).append(new directory.views.EmployeeListItemView({model: employee}).render().el);
        }, this);
        return this;
    }

});

directory.views.EmployeeListItemView = Backbone.View.extend({

    tagName: "li",

    initialize: function() {
        this.template = _.template(directory.utils.templateLoader.get('lista-pratos'));
    },

    render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});

directory.views.EmployeePage = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(directory.utils.templateLoader.get('pratos'));
    },

    render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});

// ----------------------------------------------- The Application Router ------------------------------------------ //

directory.Router = Backbone.Router.extend({

    routes: {
        "": "list",
        "list": "list",
        "prato/:id": "employeeDetails",
        "prato/:id/reports": "directReports"
    },

    initialize: function() {

        var self = this;

        // Keep track of the history of pages (we only store the page URL). Used to identify the direction
        // (left or right) of the sliding transition between pages.
        this.pageHistory = [];

        // Register event listener for back button troughout the app
        $('#content').on('click', '.header-back-button', function(event) {
            window.history.back();
            return false;
        });

        // Check of browser supports touch events...
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // ... if yes: register touch event listener to change the "selected" state of the item
            $('#content').on('touchstart', 'a', function(event) {
                self.selectItem(event);
            });
            $('#content').on('touchend', 'a', function(event) {
                self.deselectItem(event);
            });
        } else {
            // ... if not: register mouse events instead
            $('#content').on('mousedown', 'a', function(event) {
                self.selectItem(event);
            });
            $('#content').on('mouseup', 'a', function(event) {
                self.deselectItem(event);
            });
        }

        this.searchResults = new directory.models.EmployeeCollection();
        this.searchPage = new directory.views.SearchPage({model: this.searchResults});
        this.searchPage.render();
        $(this.searchPage.el).attr('id', 'searchPage');
    },

    selectItem: function(event) {
        $(event.target).addClass('tappable-active');
    },

    deselectItem: function(event) {
        $(event.target).removeClass('tappable-active');
    },

    list: function() {
        var self = this;
        this.slidePage(this.searchPage);
    },

    employeeDetails: function(id) {
        var employee = new directory.models.Employee({id: id}),
            self = this;
        employee.fetch({
            success: function(data) {
                self.slidePage(new directory.views.EmployeePage({model: data}).render());
            }
        });
    },

    directReports: function(id) {
        var employee = new directory.models.Employee({id: parseInt(id)});
        employee.reports.fetch();
        this.slidePage(new directory.views.DirectReportPage({model: employee.reports}).render());
    },

    slidePage: function(page) {

        var slideFrom,
            self = this;

        if (!this.currentPage) {
            // If there is no current page (app just started) -> No transition: Position new page in the view port
            $(page.el).attr('class', 'page stage-center');
            $('#content').append(page.el);
            this.pageHistory = [window.location.hash];
            this.currentPage = page;
            return;
        }

        // Cleaning up: remove old pages that were moved out of the viewport
        $('.stage-right, .stage-left').not('#searchPage').remove();

        if (page === this.searchPage) {
            // Always apply a Back (slide from left) transition when we go back to the search page
            slideFrom = "left";
            $(page.el).attr('class', 'page stage-left');
            // Reinitialize page history
            this.pageHistory = [window.location.hash];
        } else if (this.pageHistory.length > 1 && window.location.hash === this.pageHistory[this.pageHistory.length - 2]) {
            // The new page is the same as the previous page -> Back transition
            slideFrom = "left";
            $(page.el).attr('class', 'page stage-left');
            this.pageHistory.pop();
        } else {
            // Forward transition (slide from right)
            slideFrom = "right";
            $(page.el).attr('class', 'page stage-right');
            this.pageHistory.push(window.location.hash);
        }

        $('#content').append(page.el);

        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ' + (slideFrom === "right" ? 'stage-left' : 'stage-right'));
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
        });

    }

});

// Bootstrap
directory.utils.store.populate();
directory.utils.templateLoader.load(['pesquisa', 'sugestao', 'pratos', 'lista-pratos'],
    function() {
        directory.app = new directory.Router();
        Backbone.history.start();
    });