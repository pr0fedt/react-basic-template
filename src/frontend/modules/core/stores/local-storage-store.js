'use strict';

import invariant from 'react/lib/invariant';
import LocalStorage from 'store';
import {Store} from 'flux-ext';

import {isString} from 'lib/common';

import {EVENTS} from '../constants';

export const localStorageStore = new Store({
	prefix: '$',
	isInit: false,
	shim: false,
	_fallback: {}
}, {
	[EVENTS.E_LOCAL_STORAGE_INIT](){
		if(!LocalStorage.enabled){
			this.data.shim = true;
		}
		this.data.isInit = true;
		this.update();
	},
	[EVENTS.E_LOCAL_STORAGE_SET_PREFIX](prefix){
		invariant(
			isString(prefix),
			`prefix must be a string, got ${typeof prefix}`
		);
		this.data.prefix = `${prefix}$`;
		this.update();
	},
	[EVENTS.E_LOCAL_STORAGE_SET_VALUE]({key, value}){
		this.assertInit();
		invariant(
			isString(key),
			`key must be a string, got ${typeof key}`
		);
		let {shim, prefix} = this.data;
		let lsKey = `${prefix}${key}`;
		if(shim){
			this.data._fallback[lsKey] = value;
		}else{
			LocalStorage.set(lsKey, value);
		}
		this.update();
	},
	[EVENTS.E_LOCAL_STORAGE_REMOVE_VALUE](key){
		this.assertInit();
		invariant(
			isString(key),
			`key must be a string, got ${typeof key}`
		);
		let {shim, prefix} = this.data;
		let lsKey = `${prefix}${key}`;
		if(shim){
			delete this.data._fallback[lsKey];
		}else{
			LocalStorage.remove(lsKey);
		}
		this.update();
	},
	[EVENTS.E_LOCAL_STORAGE_CLEAR](){
		this.assertInit();
		invariant(
			isString(key),
			`key must be a string, got ${typeof key}`
		);
		let {shim} = this.data;
		if(shim){
			this.data._fallback = {};
		}else{
			LocalStorage.clear();
		}
		this.update();
	}
}, {
	assertInit(){
		invariant(
			this.isInit(), 
			`LocalStorage Store is not initialized`
		);
	},
	isInit(){
		let {isInit} = this.data;
	},
	get(key){
		this.assertInit();
		let {prefix, shim} = this.data;
		let lsKey = `${prefix}${key}`;
		if(shim){
			return this.data._fallback[lsKey];
		}
		return LocalStorage.get(lsKey);
	}
});