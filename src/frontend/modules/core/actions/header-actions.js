'use strict';

import {ActionCreator} from 'flux-ext';

import {EVENTS} from '../constants';

export const headerActions = ActionCreator({
	metaAdd: {
		type: EVENTS.E_META_ADD
	},
	metaSet: {
		type: EVENTS.E_META_SET
	},
	titleSet: {
		type: EVENTS.E_TITLE_SET
	},
	titlePart: {
		type: EVENTS.E_TITLE_ADD_PART
	},
	titleSplitter: {
		type: EVENTS.E_TITLE_SET_SPLITTER
	}
});