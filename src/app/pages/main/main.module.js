'use strict';

import route from './main.route';
import cupDashboard from '../../components/cup-dashboard/cupDashboard.module';
import statDashboard from '../../components/stat-dashboard/statDashboard.module';

const mainPageModule = angular.module('main-module', [
  'ui.router',
  cupDashboard.name,
  statDashboard.name
]);

mainPageModule
    .config(route);

export default mainPageModule;
