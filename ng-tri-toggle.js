var ngTriToggle = angular.module('ngTriToggle', []);
ngTriToggle
    .directive('triToggle', function($timeout) {
        return {
            restrict: 'E',
            replace: false,
            transclude: true,
            scope: {
                ngChange: '&',
                val: '=ngModel',
                ngTrueVal: '=?',
                ngngFalseVal: '=?',
                ngNoVal: '=?',
                tanner: '&'
            },
            template: '<div class="tri-toggle-wrap" ng-class="{\'true\': val==ngTrueVal, \'false\': val==ngFalseVal}" ng-click="toggle()"><div class="tri-toggle-false" ng-click="toggleFalse()"></div><div class="tri-toggle-true" ng-click="toggleTrue()"></div><div class="tri-toggle-handle" ng-click="toggleNone()"></div></div>',
            link: function(scope) {

                if (!angular.isDefined(scope.ngTrueVal)) {
                    scope.ngTrueVal = 1;
                }
                if (!angular.isDefined(scope.ngFalseVal)) {
                    scope.ngFalseVal = 0;
                }
                if (!angular.isDefined(scope.ngNoVal)) {
                    scope.ngNoVal = null;
                }

                if (!angular.isDefined(scope.val)) {
                    scope.val = scope.ngNoVal;
                }

                /*scope.toggleTrue = function() {
                    scope.val = 1;
                };

                scope.toggleFalse = function() {
                    scope.val = -1;
                };

                scope.toggleNone = function() {
                    scope.val = null;
                };*/

                scope.toggle = function() {
                    if (scope.val === scope.ngTrueVal) {
                        scope.val = scope.ngFalseVal;
                    } else if (scope.val === scope.ngFalseVal) {
                        scope.val = scope.ngNoVal;
                    } else {
                        scope.val = scope.ngTrueVal;
                    }
                    if (typeof scope.ngChange != 'undefined') {
                        $timeout(function() {
                            scope.ngChange(scope.val);
                        });
                    }
                };

                scope.tanner = function() {

                }

            },
        };
    });