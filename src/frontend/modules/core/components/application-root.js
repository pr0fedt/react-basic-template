'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';

import ApplicationHeader from './application-header';

const ApplicationRoot = React.createClass({
	render(){
		return (
			<div className="application-root">
				<ApplicationHeader />
				<RouteHandler />
			</div>
		);
	}
});

export default ApplicationRoot;
