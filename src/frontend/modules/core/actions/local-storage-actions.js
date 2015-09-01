'use strict';

import {ActionCreator} from 'flux-ext';

import {EVENTS} from '../constants';

export const localStorageActions = ActionCreator({
	init: {type: EVENTS.E_LOCAL_STORAGE_INIT},
	prefix: {type: EVENTS.E_LOCAL_STORAGE_SET_PREFIX},
	set: {type: EVENTS.E_LOCAL_STORAGE_SET_VALUE},
	remove: {type: EVENTS.E_LOCAL_STORAGE_REMOVE_VALUE},
	clear: {type: EVENTS.E_LOCAL_STORAGE_CLEAR}
});
