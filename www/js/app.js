angular.module('starter', ['ionic', 'uiGmapgoogle-maps', 'nemLogging', 'ngCordova'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            });

        $urlRouterProvider.otherwise('/tab/modal');
    });
