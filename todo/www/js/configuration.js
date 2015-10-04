(function() {
    "use strict";
    angular.module('configuration', [])
        .constant('domain', {
            api: 'http://localhost:8080'
        })
        .constant('secret', {
            auth: 'Basic YXBwY2xpZW50OnNlY3JldA=='
        });
})();
