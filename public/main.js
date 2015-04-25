var module = angular.module('sampleApp', []);


module.controller('mainController', function($scope) {

	$scope.data = ['item 1', 'item 2', 'item 3'];

	$scope.stores = ['Barneys', 'Saks', 'Macys'];

	$scope.isCool = true;

	$scope.money = 100;

	$scope.alertHello = function(name) {
		alert(name);
	}

	console.log($scope);

});