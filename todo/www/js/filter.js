(function() {
    "use strict";

    angular.module('filters', [])
        .filter('capitalize', [function() {
            return function(text) {
                if (text.length > 0)
                    return text.replace(text[0], text[0].toUpperCase());
            };
        }])
})();
