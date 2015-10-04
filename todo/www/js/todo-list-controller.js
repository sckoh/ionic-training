(function() {
    "use strict";

    angular.module('todo-list.controller', [])
        .controller('TodoListCtrl', ['session', '$state', '$ionicHistory', 'TodoService', '$scope', '$ionicModal', '$ionicListDelegate', '$translate', 
            function(session, $state, $ionicHistory, TodoService, $scope, $ionicModal, $ionicListDelegate, $translate) {
                var self = this;

                self.service = TodoService;

                self.signOut = function() {
                    session.destroy();

                    $ionicHistory.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true,
                        historyRoot: true
                    });

                    $state.go('login');
                };

                TodoService.findAll()
                    .then(function(todos) {
                        self.todos = todos;
                    });

                $ionicModal.fromTemplateUrl('add-todo.html', {
                    scope: $scope
                }).then(function(modal) {
                    self.modal = modal;
                });
                self.openAddTodoModal = function() {
                    TodoService.saveTodo = TodoService.save;
                    TodoService.saveMode = 'Add';
                    self.modal.show();
                };
                self.openEditTodoModal = function(todo) {
                    TodoService.saveTodo = TodoService.update;
                    TodoService.saveMode = 'Edit';
                    TodoService.todo = todo;
                    self.modal.show();
                };
                self.closeTodoModal = function() {
                    TodoService.todo = {};
                    self.modal.hide();
                };
                //Cleanup the modal when we're done with it!
                $scope.$on('$destroy', function() {
                    self.modal.remove();
                });
                // Execute action on hide modal
                $scope.$on('modal.hidden', function() {
                    // Execute action
                });
                // Execute action on remove modal
                $scope.$on('modal.removed', function() {
                    // Execute action
                });

                self.deleteTodo = function(todo) {
                    TodoService.delete(todo.id)
                        .then(function() {
                            $ionicListDelegate.closeOptionButtons();
                        });
                };

                self.toggleLang = function() {
                    $translate.use() === 'en' ? $translate.use('zh') : $translate.use('en');
                };
            }
        ])
        .controller('TodoCtrl', ['TodoService', '$scope', function(TodoService, $scope) {
            var self = this;

            self.service = TodoService;

            self.saveTodo = function(todo) {
                TodoService.saveTodo(todo)
                    .then(function() {
                        $scope.tlc.closeTodoModal();
                    });
            };
        }]);
})();
