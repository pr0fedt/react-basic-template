'use strict';

import React from 'react';
import {Dialog, Paper, RaisedButton, Styles} from 'material-ui';

import {MaterialMixin} from 'modules/core/mixins';

const {Colors} = Styles;

const HomePage = React.createClass({
	mixins: [
		MaterialMixin
	],
	componentWillMount(){
		let accent1Color = Colors.deepOrange500;
		this.ThemeManager.setPalette({accent1Color});
	},

	handleTouchTap(e){
		this.refs.sampleDialog.show();
	},

	render(){
		let dialogActions = [
			{text: 'Okay'}
		];
		return (
			<div className="home-page">
				<Dialog title="Sample Dialog"
					actions={dialogActions}
					ref="sampleDialog">
					Sample Content
				</Dialog>

				<h1>Home Page</h1>
				<h2>Testing Material-UI React</h2>

				<RaisedButton label="Show Dialog"
					primary={true}
					onTouchTap={this.handleTouchTap} />

			</div>
		);
	}
});

export default HomePage;