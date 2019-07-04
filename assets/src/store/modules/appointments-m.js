import actions from '../actions/appointments-a'

export default {
    state: {
        data:{}
    },
    mutations: {
        Appointments_Data: (state,payload) => state.data=payload
    },
    actions
  }
