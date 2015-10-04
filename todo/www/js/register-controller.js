(function() {
    "use strict";

    angular.module('register.controller', [])
        .controller('RegisterCtrl', ['RegisterService', function(RegisterService) {
            var self = this;

            self.register = function(user) {
                RegisterService.register(user)
                    .then(function(response) {
                        self.message = 'Register successfully';
                    })
                    .catch(function() {
                        self.message = "Fail to register";
                    });
            };
        }]);
})();
