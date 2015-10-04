(function() {
    "use strict";

    angular.module('directives', [])
        .directive('listTwoItem', function() {
            return {
                restrict: 'E',
                templateUrl: 'list-two-item.html',
                scope: {
                	text1: '=',
                	text2: '='
                }
            };
        })
})();
