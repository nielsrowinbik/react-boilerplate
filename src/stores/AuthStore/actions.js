import { action } from 'mobx';

const actions = (state) => {

	const signIn = action(() => state.authed = true);

	const signOut = action(() => state.authed = false);

	return {
		signIn,
		signOut
	};
};

export default actions;