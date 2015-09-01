'use strict';

import React from 'react';

import {localStorageActions} from '../actions';
import {DEFAULT} from '../constants';
import {localStorageStore} from '../stores';

const ApplicationData = React.createClass({
	mixins: [
		localStorageStore.getReactMixin('ls')
	],

	componentDidMount(){
		localStorageActions.init();
		localStorageActions.prefix(DEFAULT.LOCAL_STORAGE_PREFIX);
	},

	lsStoreUpdate(){
		/* Do nothing */
	},

	render(){
		return <div className="application-data-wrapper" />
	}
});

export default ApplicationData;

