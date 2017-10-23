CupDashboardCtrl.$inject = ['$scope', 'CupFactory'];
function CupDashboardCtrl($scope, CupFactory) {
    $scope.cups = CupFactory.query();
    $scope.imgPath = img => 'assets/images/ecocups/' + img + '.png';
}

export default CupDashboardCtrl;