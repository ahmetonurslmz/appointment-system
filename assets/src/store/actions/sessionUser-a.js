import { post } from 'axios'

export default {
 userDetails: async (context, payload) => {
            await post('/login/get-session-user-details')
            .then(res => context.commit('SessionUser_Details', res.data))
            .catch(err => console.log(err))
          },

}
