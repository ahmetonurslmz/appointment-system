import Vue from 'vue'
import Vuex from 'vuex'

import sessionUser from './modules/sessionUser-m'
import appointments from './modules/appointments-m'
import appointment from './modules/appointment-m'

Vue.use(Vuex);
 
export const store = new Vuex.Store({
    strict: false,
    modules: {
        sessionUser,
        appointments,
        appointment
    }
})