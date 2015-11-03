angular.module('starter').config(function ($stateProvider) {
   $stateProvider
       .state('tab.modal', {
           url: '/modal',
           views: {
               'tab-modal': {
                   templateUrl: 'templates/tab-modal.html',
                   controller: 'ModalTabCtrl'
               }
           }
       })
});