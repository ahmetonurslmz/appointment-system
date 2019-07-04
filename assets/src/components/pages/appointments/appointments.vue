<template>
<div class="container">
<div class="row">
                        <div class="col-md-12">
                            <div class="card card-plain table-plain-bg">
                                <div class="card-header ">
                                    <h4 class="card-title">Appointments</h4>
                                    <p class="card-category">You can click ID number of appointment to obtain wide details.</p>
                                </div>
                                <div class="card-body table-full-width table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Date</th>
                                            <th>Departure Time</th>
                                            <th>Return Time</th>
                                        </thead>
                                        <tbody v-if="appointments">
                                            <tr v-for="(one,index) in appointments" v-bind:key="one._id">
                                                <td><router-link :to="'/appointment/'+one._id">{{index+1}}</router-link></td>
                                                <td>{{one.name}}</td>
                                                <td>{{one.destinationAddress}}</td>
                                                <td>{{one.dateTime | moment('LLLL')}}</td>
                                                <td>{{one.timeToGo | moment('LLLL') }}</td>
                                                <td>{{one.timeToCome | moment('LLLL')}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
</div>
</div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('appointmentsDetails')
    },
    computed: {
        appointments() {
            return this.$store.state.appointments.data
        }
    },
    methods: {
    }
}
</script>
