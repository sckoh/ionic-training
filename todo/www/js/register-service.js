(function() {
    "use strict";
    angular.module('register.service', [])
        .factory('RegisterService', ['$http', 'domain', 'secret', '$httpParamSerializerJQLike', function($http, domain, secret, $httpParamSerializerJQLike) {
            var service = {
                register: function(user) {
                    return $http.post(domain.api + '/users', {
                        username: user.username,
                        password: user.password
                    });
                }
            };
            return service;
        }]);
})();
