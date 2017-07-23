var app = angular.module("app");

app.directive("common", function() {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "./src/views/common.html",
        scope: {
            info: "="
        },
        controller: function($scope, $element, $attrs, $http) {
            $scope.data = { "title": "Common Data" };

            $scope.method1 = function() {
                console.log(new Date());
                console.log($http);
            };
        },
    }
});