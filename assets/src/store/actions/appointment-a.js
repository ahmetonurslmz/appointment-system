import { post } from 'axios'

export default {
 appointmentDetails: async (context, payload) => {
            await post('/appointment/get-data', payload)
            .then(res => context.commit('Appointment_Data', res.data))
            .catch(err => console.log(err))
          },
}