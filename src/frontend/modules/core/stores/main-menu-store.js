'use strict';

import {Store} from 'flux-ext';

import {isArray} from 'lib/common';

import {EVENTS} from '../constants';

export const mainMenuStore = new Store({
	hidden: true,
	items: []
}, {
	[EVENTS.E_MAIN_MENU_TOGGLE](visible){
		this.data.hidden = !visible;
		this.update();
	},
	[EVENTS.E_MAIN_MENU_ADD_ITEMS](items){
		this.data.items = isArray(items) ? 
			[...this.data.items, ...items] : [...this.data.items, items];
		this.update();
	},
	[EVENTS.E_MAIN_MENU_CLEAR](){
		this.data.items = [];
		this.update();
	}
}, {
	isHidden(){
		return this.data.hidden;
	},
	get(){
		return this.data.items;
	}
});
