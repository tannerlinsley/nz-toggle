(function() {
    var module = angular.module('nzToggle', []);

    module.directive('nzToggle', ["$timeout", function($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                config: '=?',
                ngModel: '=',
                onToggle: '&'
            },
            template: [
                '<div class="nz-toggle-wrap" ng-class="getStyle()" ng-style="wrapStyle" ng-click="toggle()">',
                '   <div class="nz-toggle">',
                '       <div class="nz-toggle-handle"></div>',
                '   </div>',
                '   <div class="nz-toggle-tooltip" ng-show="tooltip">',
                '       <span ng-class="{\'active\': showTooltip1}">',
                '           <span ng-show="tipFalse"></span>{{tipFalse}}',
                '       </span>',
                '       <br ng-show="vertical">',
                '       <span ng-class="{\'active\': showTooltip2}" ng-show="triToggle">',
                '           <span ng-show="tipNull"></span>{{tipNull}}',
                '       </span>',
                '       <br ng-show="vertical">',
                '       <span ng-class="{\'active\': showTooltip3}">',
                '           <span ng-show="tipTrue"></span>{{tipTrue}}',
                '       </span>',
                '   </div>',
                '</div>',
            ].join(''),
            link: function(scope, el, attrs) {

                // Helpers
                var has = angular.isDefined,
                    copy = angular.copy;

                // Defaults
                var defaults = {
                    vertical: false,
                    valTrue: true,
                    valFalse: false,
                    valNull: null,
                    width: 50,
                    height: 25,
                    padding: 3,
                    colorTrue: '#60BD68',
                    colorFalse: '#F15854',
                    colorNull: '#DDD',
                    tooltip: false,
                };

                // VM shorthand
                var vm = scope;

                // Scope Props & Methods
                angular.extend(vm, {
                    getStyle: getStyle,
                    toggle: toggle
                });

                init();




                function init() {

                    parseOptions();

                    if (!has(vm.ngModel)) {
                        if (has(vm.valDefault)) {
                            vm.ngModel = vm.valDefault;
                        } else if (vm.triToggle) {
                            vm.ngModel = vm.valNull;
                        } else {
                            vm.ngModel = vm.valFalse;
                        }
                    }

                    var first = true;

                    vm.$watch('ngModel', function() {
                        update();
                        if (first) {
                            first = false;
                            return;
                        }
                        if (vm.onToggle.call) {
                            var res = vm.onToggle();
                            if (res && res.call) {
                                res(vm.ngModel);
                            }
                        }
                    }, true);
                }

                function parseOptions() {
                    /* Extend defaults with config, allow attrs overrides */
                    angular.extend(vm, defaults, vm.config || {});

                    /* Tri-toggle Setting */
                    if (has(attrs.triToggle)) {
                        vm.triToggle = true;
                    }

                    // Allow attribute overrides
                    angular.forEach([
                        /* Values */
                        'valDefault',
                        'valTrue',
                        'valFalse',
                        'valNull',
                        /* Dimensions */
                        'width',
                        'height',
                        /* Custom Colors */
                        'colorFalse',
                        'colorNull',
                        'colorTrue',
                        /* ToolTips */
                        'tipTrue',
                        'tipFalse',
                        'tipNull',
                    ], function(prop) {
                        if (has(attrs[prop])) {
                            vm[prop] = vm.$eval(attrs[prop]);
                        }
                    });

                    // Has tooltips?
                    if (vm.tipTrue || attrs.tipFalse || attrs.tipNull) {
                        vm.tooltip = true;
                    }

                    if (has(attrs.vertical)) {
                        vm.vertical = true;

                        var temp;

                        if (vm.tooltip) {
                            temp = vm.tipTrue;
                            vm.tipTrue = vm.tipFalse;
                            vm.tipFalse = temp;
                        }

                        if ((!vm.$eval(attrs.width) && !vm.$eval(attrs.width)) &&
                            (!(vm.config && (vm.config.width || vm.config.height)))) {
                            temp = vm.width;
                            vm.width = vm.height;
                            vm.height = temp;
                        }
                    }

                    // Base Styles
                    vm.wrapStyle = {
                        width: vm.width + 'px',
                        height: vm.height + 'px',
                    };

                    // Auto Border Radius 
                    if (!has(vm.outerRadius)) {
                        vm.outerRadius = Math.min(vm.width, vm.height) / 2;
                    }
                    vm.innerRadius = vm.outerRadius - vm.padding;
                }

                function getStyle() {
                    return [!vm.vertical ? 'horizontal' : 'vertical', vm.state];
                }

                /* Switch Position */
                function update() {

                    vm.showTooltip1 = false;
                    vm.showTooltip2 = false;
                    vm.showTooltip3 = false;

                    // Truthy
                    if (angular.equals(vm.ngModel, vm.valTrue)) {
                        vm.wrapStyle.backgroundColor = vm.colorTrue;
                        vm.state = 'true';

                        if (vm.vertical) {
                            vm.showTooltip1 = true;
                        } else {
                            vm.showTooltip3 = true;
                        }

                        return;
                    }

                    // False
                    if (angular.equals(vm.ngModel, vm.valFalse)) {
                        vm.state = 'false';
                        vm.wrapStyle.backgroundColor = vm.colorFalse;

                        if (vm.vertical) {
                            vm.showTooltip3 = true;
                        } else {
                            vm.showTooltip1 = true;
                        }

                        return;
                    }

                    // Must be the middle
                    vm.state = 'null';
                    vm.wrapStyle.backgroundColor = vm.colorNull;
                    vm.showTooltip2 = true;
                }

                /* Logic */

                function toggle() {

                    if (vm.state == 'false') {
                        vm.ngModel = vm.triToggle ? vm.valNull : vm.valTrue;
                        return;
                    }

                    if (vm.state == 'null') {
                        vm.ngModel = vm.valTrue;
                        return;
                    }

                    vm.ngModel = vm.valFalse;

                }
            },
        };
    }]);
})();
