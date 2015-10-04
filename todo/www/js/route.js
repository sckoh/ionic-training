(function() {
    "use strict";

    angular.module('todo.route', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('todos', {
                    url: "/todos",
                    templateUrl: "todos.html",
                    controller: "TodoListCtrl as tlc"
                })
                .state('login', {
                    url: "/login",
                    templateUrl: "login.html",
                    controller: "LoginCtrl as ctrl",
                    protected: 'no'
                })
                .state('register', {
                    url: "/register",
                    templateUrl: "register.html",
                    controller: "RegisterCtrl as ctrl",
                    protected: 'no'
                })
                // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise(function($injector) {
                var $state = $injector.get("$state");
                $state.go("todos");
            });
        });
})();
