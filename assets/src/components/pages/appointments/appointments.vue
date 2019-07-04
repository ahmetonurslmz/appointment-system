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
                                            <th>Name Surname</th>
                                            <th>Address</th>
                                            <th>Date</th>
                                            <th>Time To Go</th>
                                            <th>Time To Come</th>
                                        </thead>
                                        <tbody v-if="appointments">
                                            <tr v-for="(one,index) in appointments" v-bind:key="one._id">
                                                <td>{{index+1}}</td>
                                                <td>{{one.name+''+one.surname}}</td>
                                                <td>{{one.destinationAddress}}</td>
                                                <td>{{one.dateTime}}</td>
                                                <td>{{one.timeToGo}}</td>
                                                <td>{{one.timeToCome}}</td>
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
