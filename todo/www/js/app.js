// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', [
    'ionic',
    'ngMessages',
    'ngStorage',
    'templates',
    'pascalprecht.translate',
    'configuration',
    'session',
    'todo.route',
    'login.controller',
    'login.service',
    'register.controller',
    'register.service',
    'todo-list.controller',
    'todo.service',
    'filters',
    'directives'
])

.run(function($ionicPlatform, $rootScope, $localStorage, $state, session, $http) {

        $http.defaults.headers.common.Authorization = session.getBearerToken();

        $rootScope.$on('$stateChangeStart', function(event, next) {
            // 如果不是在 login页 和 没登入
            if (next.protected != 'no' && !session.isAuthenticated()) {
                event.preventDefault();
                $state.go('login');
            }
        })

        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(['$translatePartialLoaderProvider', '$translateProvider', function($translatePartialLoaderProvider, $translateProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/{lang}.json'
        });
        $translatePartialLoaderProvider.addPart('locale');
        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
    }]);
