<template>
<div class="container">
<div class="row">
                        <div class="col-md-12" style="margin-top: 50px;" v-if="appointment">
                            <div class="card" >
                            <div class="header">
                                <h4 class="title">Appointment</h4>
                                <font size="2">NO: #{{appointment._id}}</font>
                            </div>
                            <div class="content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Name </label>
                                                <input type="text" disabled  class="form-control" :value="appointment.name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Surname</label>
                                                <input type="text" disabled  class="form-control" :value="appointment.surname">
                                            </div>
                                        </div>
                                    </div>

                                     <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>E-mail Address </label>
                                                <input type="text" disabled  class="form-control" :value="appointment.email">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="number" disabled  class="form-control" :value="appointment.phone_number">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                             <div class="form-group">
                                                <label>Date:</label>
                                               <span>{{ appointment.dateTime | moment('LLLL') }}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                             <div class="form-group">
                                                <label>Starter Position:</label>
                                                <input type="text" disabled  class="form-control" value="Osmaniye, İBB-Çırpıcı Çayırı Parkı, Çırpıcı Koşuyolu Sk. No:49, 34146 Bakırköy/İstanbul, Türkiye">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                             <div class="form-group">
                                                <label>Destination Position:</label>
                                                <input type="text" disabled  class="form-control" :value="appointment.destinationAddress">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            Distance: {{appointment.distance}}<br>
                                            Duration: {{appointment.duration}}<br>
                                            Departure Time: {{appointment.timeToGo | moment('LLLL') }}<br>
                                            Return Time: {{appointment.timeToCome | moment('LLLL') }}<br>
                                            <font size="1">*Appointment length was calculated as 1 hour.</font>
                                        </div>
                                    </div>
           

           

                                    <div class="clearfix"></div>
                            </div>
                            </div>
                        </div>
</div>
</div>
</template>
<script>
export default {
    data() {
        return {
            a_id: this.$route.params.id,
        }
    },
    computed: {
        appointment() {
            return this.$store.state.appointment.data
        }
    },
    created() {
        var a_id=this.a_id;
        this.$store.dispatch('appointmentDetails',{a_id});
    }
}
</script>
