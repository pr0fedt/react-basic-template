'use strict';

import invariant from 'react/lib/invariant';
import React from 'react';

import {isString, isUndefined} from 'lib/common';

const ApplicationTitle = React.createClass({
	setDocumentTitle(title){
		if(!isUndefined(document)){
			document.title = isString(title) ? title : '';
		}
	},

	componentDidMount(){
		let {title} = this.props;
		this.setDocumentTitle(title);
	},

	componentWillReceiveProps(next){
		let {title} = next;
		this.setDocumentTitle(title);
	},

	render(){
		let {title} = this.props;
		return (
			<div className="application-title-wrapper">{title}</div>
		);
	}
});

export default ApplicationTitle;