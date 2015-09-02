'use strict';

import React from 'react';
import {Styles} from 'material-ui';

export const MaterialMixin = {
	ThemeManager: Styles.ThemeManager(),

	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext(){
		let muiTheme = this.ThemeManager.getCurrentTheme();
		return {muiTheme};
	}
};