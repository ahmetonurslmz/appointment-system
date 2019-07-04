import { post } from 'axios'

export default {
 appointmentsDetails: async (context, payload) => {
            await post('/appointments/get-data')
            .then(res => context.commit('Appointments_Data', res.data))
            .catch(err => console.log(err))
          },
}