'use strict';

import {ActionCreator} from 'flux-ext';

import {EVENTS} from '../constants';

export const mainMenuActions = ActionCreator({
	toggle: {type: EVENTS.E_MAIN_MENU_TOGGLE},
	add: {type: EVENTS.E_MAIN_MENU_ADD_ITEMS},
	clear: {type: EVENTS.E_MAIN_MENU_CLEAR}
});