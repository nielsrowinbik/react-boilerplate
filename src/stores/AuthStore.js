import { computed, observable } from 'mobx';

class AuthStore {
	
	@observable loading = true;
	@observable busy = false;
	users = observable.map({});

	@computed get authed() { return this.users.get('current').size > 0; }

	constructor() {
		this.users.set('current', observable.map({}));
	}
}

export default new AuthStore();