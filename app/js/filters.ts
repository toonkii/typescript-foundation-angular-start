/// <reference path="../ts/angular.d.ts" />

'use strict';

/* Filters */

angular.module('myApp.filters', []).
    filter('interpolate', ['version', (version) => {
        return (text) => {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);