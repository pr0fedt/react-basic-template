'use strict';

import {Dispatcher} from 'flux-ext';
import moment from 'moment';

Dispatcher.instance.log = (...args) => console.log(args);
Dispatcher.instance.dispatch('Application->Start', {at: moment()}, 'View');