angular.module('starter').controller('ModalTabCtrl', function ($ionicModal, $scope, $timeout) {
    $scope.modalControl = {};

    $ionicModal.fromTemplateUrl('templates/my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function () {
        $scope.modal.show();
        $scope.modalControl.refresh({
            latitude: 37.778414,
            longitude: -122.389212
        });
    };

    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    $scope.map = {
        center: {
            latitude: 37.778414,
            longitude: -122.389212
        },
        zoom: 8
    };
});