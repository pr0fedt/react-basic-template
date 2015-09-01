'use strict';

import invariant from 'react/lib/invariant';
import {Store} from 'flux-ext';

import {isArray, isObject} from 'lib/common';

import {EVENTS} from '../constants';

export const metaStore = new Store([], {
	[EVENTS.E_META_ADD](metaTags){
		invariant(
			isObject(metaTags), 
			`metaTags should be an object, got ${typeof metaTags}`
		);
		this.data = [...this.data, metaTags];
		this.update();
	},

	[EVENTS.E_META_SET](metaTagList){
		invariant(
			isArray(metaTagList),
			`metaTagList should be an array, got ${typeof metaTagList}`
		);
		this.data = metaTagList;
		this.update();
	}
}, {
	get(){
		return this.data;
	},
	unload(){
		this.clear();
	}
});
