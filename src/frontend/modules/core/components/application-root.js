'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import {IconButton, Paper, Tabs, Tab} from 'material-ui';

import ApplicationData from './application-data';
import ApplicationHeader from './application-header';

import {mainMenuActions} from '../actions';
import {MaterialMixin} from '../mixins';
import {mainMenuStore} from '../stores';
import {mainMenuStyle} from '../styles';

const ApplicationRoot = React.createClass({
	mixins: [
		mainMenuStore.getReactMixin('mainMenu'),
		MaterialMixin
	],

	componentDidMount(){
		mainMenuActions.add([{
			label: 'Item 1'
		}, {
			label: 'Item 2'
		}]);
		mainMenuActions.toggle(true);
	},

	getInitialState(){
		return Object.assign({}, this.getMenuState());
	},

	getMenuState(){
		let mainMenuHidden = this.mainMenuStore.isHidden();
		let mainMenuItems = this.mainMenuStore.get();
		return {mainMenuHidden, mainMenuItems};
	},

	mainMenuStoreUpdate(){
		this.setState(this.getMenuState());
	},

	render(){
		let {mainMenuHidden, mainMenuItems} = this.state;
		return (
			<div className="application-root">
				<ApplicationData />
				<ApplicationHeader />
				{!mainMenuHidden ? (
					<Paper zDepth={1} 
					rounded={false}
					style={mainMenuStyle}>
						<Tabs>
							{mainMenuItems.map((item, index) => (
								<Tab key={index}
									label={item.label} />
							))}
						</Tabs>
					</Paper>
				) : false}
				<RouteHandler />
			</div>
		);
	}
});

export default ApplicationRoot;
