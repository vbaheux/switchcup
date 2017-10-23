'use strict';

import footerModule from './components/footer/footer.module';
import navModule from './components/nav/nav.module';

export default angular.module('index.components', [
	footerModule.name,
	navModule.name
]);
