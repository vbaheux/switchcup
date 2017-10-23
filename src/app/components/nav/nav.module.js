'use strict';

import template from './nav.html';
import './nav.scss';

const navModule = angular.module('nav', []);
navModule
    .component('uiNav', {
        templateUrl: template
    });

export default navModule;