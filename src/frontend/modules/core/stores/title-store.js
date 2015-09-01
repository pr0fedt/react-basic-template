'use strict';

import invariant from 'react/lib/invariant';
import {Store} from 'flux-ext';

import {isString} from 'lib/common';

import {EVENTS} from '../constants';

let splitter = ' :: ';

export const titleStore = new Store('', {
	[EVENTS.E_TITLE_SET](title){
		invariant(
			isString(title),
			`title should be string, got ${typeof title}`
		);
		this.data = title;
		this.update();
	},
	[EVENTS.E_TITLE_ADD_PART](titlePart){
		invariant(
			isString(part),
			`titlePart should be string, got ${typeof titlePart}`
		);
		if(this.data.length){
			this.data = `${this.data}${splitter}${titlePart}`;
		}else{
			this.data = titlePart;
		}
		this.update();
	},
	[EVENTS.E_TITLE_SET_SPLITTER](newSplitter){
		invariant(
			isString(newSplitter),
			`splitter should be string, got ${typeof splitter}`
		);
		this.data = this.data.split(splitter).join(newSplitter);
		splitter = newSplitter;
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