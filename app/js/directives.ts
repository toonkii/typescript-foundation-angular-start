/// <reference path="../ts/angular.d.ts" />

'use strict';

/* Directives */

angular.module('myApp.directives', []).
    directive('appVersion', ['version', (version) => {
        return (scope, elm, attrs) => {
            elm.text(version);
        };
    }]);