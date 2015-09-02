'use strict';

import invariant from 'react/lib/invariant';
import React from 'react';
import Router, {HistoryLocation} from 'react-router';
import {Dispatcher} from 'flux-ext';
import injectReactTapEvent from 'react-tap-event-plugin';

import {debugActions} from 'modules/core/actions';
import {EVENTS} from 'modules/core/constants';
import routes from 'modules/core/routes';

/** 
 * @ifenv('debug')
 **/
// Log actions
Dispatcher.instance.log = ({type, data, source}) => 
	[EVENTS.E_LOG].indexOf(type) === -1 && 
	debugActions.log({type, data, source});

// Needed for React Developer Tools
window.React = React;
/**
 * @endif
 **/

/**
 * @ifver('react' lt '1.0')
 **/
injectReactTapEvent();
/**
 * @endif
 **/

Router.run(routes, HistoryLocation, function(Handler){	
	React.render(<Handler />, document.body);
});
