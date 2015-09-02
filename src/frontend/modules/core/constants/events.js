'use strict';

export const EVENTS = {
	'E_LOG': 'log',
	'E_LOCAL_STORAGE_INIT': 'initLocalStorage',
	'E_LOCAL_STORAGE_SET_PREFIX': 'setLocalStorageKeyPrefix',
	'E_LOCAL_STORAGE_SET_VALUE': 'setLocalStorageValue',
	'E_LOCAL_STORAGE_REMOVE_VALUE': 'removeLocalStorageValue',
	'E_LOCAL_STORAGE_CLEAR': 'clearLocalStorage',
	'E_MAIN_MENU_TOGGLE': 'toggleMainMenu',
	'E_MAIN_MENU_ADD_ITEMS': 'addMainMenuItems',
	'E_MAIN_MENU_CLEAR': 'clearMainMenu',
	'E_META_ADD': 'addMetaEntry',
	'E_META_SET': 'setMetaEntries',
	'E_TITLE_SET': 'setDocumentTitle',
	'E_TITLE_ADD_PART': 'addTitlePart',
	'E_TITLE_SET_SPLITTER': 'setTitleSplitter'
};