import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user/user.js';

export default new Vuex.Store({
	modules:{
		namespaced: true,
		user,
	},
});