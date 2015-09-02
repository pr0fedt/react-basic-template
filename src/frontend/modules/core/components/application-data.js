'use strict';

import React from 'react';

import {isArray} from 'lib/common';

import {localStorageActions} from '../actions';
import {DEFAULT} from '../constants';
import {localStorageStore, logStore} from '../stores';

const ApplicationData = React.createClass({
	mixins: [
		localStorageStore.getReactMixin('ls'),
		logStore.getReactMixin('log')
	],

	getInitialState(){
		return {log: this.logStore.get()};
	},

	componentDidMount(){
		localStorageActions.prefix(DEFAULT.LOCAL_STORAGE_PREFIX);
		localStorageActions.init();
	},

	logStoreUpdate(){
		this.setState({log: this.logStore.get()});
	},

	lsStoreUpdate(){
		/* Do nothing */
	},

	render(){
		let {log} = this.state;
		return (
			<div className="application-data-wrapper">
				<div className="application-logs">
				{isArray(log) ? log.map((entry, index) => (
					<div className="application-log-entry" 
						key={index}>
						{JSON.stringify(entry, null, 2)}
					</div>
				)) : false}
				</div>
			</div>
		);

	}
});

export default ApplicationData;

