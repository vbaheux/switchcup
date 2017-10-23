'use strict';

import template from './statDashboard.html';
import './statDashboard.scss';

const statDashboard = angular.module('statDashboard', []);
statDashboard
    .component('statDashboard', {
        templateUrl: template
    });

export default statDashboard;