'use strict';

export function isArray(val){
	return Array.isArray(val);
}

export function isES6Promise(val){
	return val instanceof Promise;
}

export function isFunction(val){
	return typeof val === 'function';
}

export function isNull(val){
	return Object.is(val, null);
}

export function isObject(val){
	return typeof val === 'object';
}

export function isString(val){
	return typeof val === 'string';
}

export function isUndefined(val){
	return typeof val === 'undefined';
}

export function mapObject(obj, mapper){
	if(!isObject(obj)){
		return [];
	}
	if(!isFunction(mapper)){
		return [];
	}
	return Object.keys(obj).map((key) => mapper(key, obj[key]));
}