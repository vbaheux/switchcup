'use strict';

import templateUrl from './footer.html';
import './footer.scss';

const footerModule = angular.module('footer-module', []);

footerModule
  .component('uiFooter', {
      templateUrl
  });

export default footerModule;
