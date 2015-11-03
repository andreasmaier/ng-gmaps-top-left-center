angular.module('starter').controller('ModalTabCtrl', function ($ionicModal, $scope) {
    $ionicModal.fromTemplateUrl('templates/my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function () {
        console.log('modal!!!!');
        $scope.modal.show();
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