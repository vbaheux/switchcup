'use strict';

import CupDashboardCtrl from './cupDashboard.controller';
import templateUrl from './cupDashboard.html';
import './cupDashboard.scss';

const cupDashboard = angular.module('cupDashboard', []);
cupDashboard
    .component('cupDashboard', {
        templateUrl,
        controller: CupDashboardCtrl,
        controllerAs: 'CupDashboardCtrl'
    });

export default cupDashboard;