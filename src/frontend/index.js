'use strict';

import invariant from 'react/lib/invariant';
import moment from 'moment';
import React from 'react';
import Router, {HistoryLocation} from 'react-router';
import {Dispatcher} from 'flux-ext';
import injectReactTapEvent from 'react-tap-event-plugin';

import routes from 'modules/core/routes';

/** 
 * @ifenv('debug')
 **/
// Log actions
Dispatcher.instance.log = (...args) => console.log(args);
Dispatcher.instance.dispatch('Application->Start', {at: moment()}, 'View');
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
