'use strict';

import {Store} from 'flux-ext';
import moment from 'moment';

import {EVENTS} from '../constants';

export const logStore = new Store([], {
	[EVENTS.E_LOG](logObject){
		let at = moment();
		this.data = [
			...this.data, 
			Object.assign({at}, logObject)
		];
		this.update();
	}
}, {
	get(){
		return this.data;
	}
});