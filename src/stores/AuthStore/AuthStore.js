import actions from './actions';
import { extendObservable } from 'mobx';

const AuthStore = (state, initial) => {

	extendObservable(state, {
		authed: false
	});

	return actions(state);
};

export default AuthStore;