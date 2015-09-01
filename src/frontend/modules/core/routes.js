'use strict';

import React from 'react';
import {DefaultRoute, Route} from 'react-router';

import {ApplicationRoot} from 'modules/core/components';
import {HomePage} from 'modules/web/components';

const routes = (
	<Route handler={ApplicationRoot}>
		<DefaultRoute handler={HomePage} />
	</Route>
);
export default routes;
