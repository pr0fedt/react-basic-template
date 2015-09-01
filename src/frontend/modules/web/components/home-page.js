'use strict';

import React from 'react';
import mui from 'material-ui';

const {Dialog, RaisedButton} = mui;
const {ThemeManager, Colors} = mui.Styles;

const themeManagerInstance = ThemeManager();

const HomePage = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext(){
		let muiTheme = themeManagerInstance.getCurrentTheme();
		return {muiTheme};
	},

	componentWillMount(){
		let accent1Color = Colors.deepOrange500;
		themeManagerInstance.setPalette({accent1Color});
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