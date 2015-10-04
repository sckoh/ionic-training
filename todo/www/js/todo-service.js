(function() {
    "use strict";
    angular.module('todo.service', [])
        .factory('TodoService', ['$http', 'domain', '$filter',
            function($http, domain, $filter) {
                var todos = [];
                var service = {
                    findAll: function() {
                        return $http.get(domain.api + '/api/todos')
                            .then(function(response) {
                                todos = response.data;
                                return todos;
                            });
                    },
                    save: function(todo) {
                        return $http.post(domain.api + '/api/todos', todo)
                            .then(function(response) {
                                todos.push(response.data);
                            });
                    },
                    update: function(todo) {
                        return $http.put(domain.api + '/api/todos', todo)
                            .then(function(response) {
                                var index = todos.indexOf($filter('filter')(todos, {
                                    id: todo.id
                                })[0]);
                                todos[index] = response.data;
                            });
                    },
                    delete: function(todoId) {
                        return $http.delete(domain.api + '/api/todos/' + todoId)
                            .then(function() {
                                var index = todos.indexOf($filter('filter')(todos, {
                                    id: todoId
                                })[0]);
                                todos.splice(index, 1);
                            });
                    }
                };
                service.todo = {};
                service.saveMode = 'Add';
                return service;
            }
        ]);
})();
