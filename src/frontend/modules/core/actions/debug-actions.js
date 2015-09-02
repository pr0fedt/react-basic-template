'use strict';

import {ActionCreator} from 'flux-ext';

import {EVENTS} from '../constants';

export const debugActions = ActionCreator({
	log: {
		type: EVENTS.E_LOG
	}
});