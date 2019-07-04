import actions from '../actions/sessionUser-a'

export default {
    state: {
        data:{}
    },
    mutations: {
        SessionUser_Details: (state,payload) => state.data=payload
    },
    actions
  }
  