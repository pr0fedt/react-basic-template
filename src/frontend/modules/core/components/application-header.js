'use strict';

import React from 'react';
import ReactMeta from 'react-doc-meta';

import {isArray} from 'lib/common';

import ApplicationTitle from './application-title';

import {headerActions} from '../actions';
import {DEFAULT} from '../constants';
import {metaStore, titleStore} from '../stores';

const ApplicationHeader = React.createClass({
	mixins: [
		metaStore.getReactMixin('meta'),
		titleStore.getReactMixin('title')
	],

	getInitialState(){
		return {
			title: 'loading ...',
			meta: []
		}
	},

	componentDidMount(){
		let {title, metaTags} = this.props;
		headerActions.titleSet(title || DEFAULT.TITLE);
		headerActions.metaSet(isArray(metaTags) ? 
			metaTags : DEFAULT.META
		);
	},

	titleStoreUpdate(){
		let title = this.titleStore.get();
		this.setState({title});
	},

	metaStoreUpdate(){
		let meta = this.metaStore.get();
		this.setState({meta});
	},

	render(){
		let {meta, title} = this.state;
		return (
			<div className="application-react-header">
				<ReactMeta tags={meta} />
				<ApplicationTitle title={title} />
			</div>
		);
	}
});

export default ApplicationHeader;