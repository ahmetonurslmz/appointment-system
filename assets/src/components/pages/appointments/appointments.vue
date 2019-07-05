<template>
<div class="container">
<div class="row">
                        <div class="col-md-12">
                            <div class="card card-plain table-plain-bg">
                                <div class="card-header ">
                                    <h4 class="card-title">Appointments</h4>
                                    <p class="card-category">You can click ID number of appointment to obtain wide details.</p>
                                </div>
                                <div class="row" style="margin-bottom: 25px;"> 
                                    <div class="col-sm-2">
                                        <select v-model="FilterUser">
                                        <option v-for="one in appointments" v-bind:key="one._id" :value="one.email">{{one.name}}</option>
                                        </select>
                                    </div>
                                
                                <div class="col-sm-2"><input type="text" v-model="FilterDistance"></div>
                                <div class="col-sm-2"><select v-model="FilterDistanceType">
                                        <option value="higher">Higher</option>
                                        <option value="equal">Equal</option>
                                        <option value="smaller">Smaller</option>
                                        </select></div>
                                <div class="col-sm-3"><input type="datetime-local" v-model="FilterDate"></div>
                                <div class="col-sm-2"><button @click="DoFilter">Filter</button></div>
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
                                        <tbody v-if="listAppoinments && Filter==false">
                                            <tr v-for="(one,index) in listAppoinments" v-bind:key="one._id">
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
    data() {
        return {
            listAppoinments: null,
            Filter: false,
            FilterUser: null,
            FilterDate: null,
            FilterDistance: null,
            FilterDistanceType: "higher"
        }
    },
    created() {
        this.$store.dispatch('appointmentsDetails');
        this.load();
    },
    watch: {
        appointments(val) {
            this.load();
        }
    },
    computed: {
        appointments() {
            return this.$store.state.appointments.data
        }
    },
    methods: {
        load() {
            this.listAppoinments=this.appointments
        },
        DoFilter() {
            var {FilterUser,FilterDate,FilterDistance,appointments,FilterDistanceType} = this;
            if(FilterUser || FilterDate || FilterDistance) {
                    this.listAppoinments=appointments;
                    var Filtering=() => {
                        if(FilterUser) {
                    function checkUser(one) {
                    return one.email == FilterUser;
                    }
                            this.listAppoinments=this.listAppoinments.filter(checkUser);
                        }
                        if(FilterDate) {
                             var d=new Date(FilterDate);
                       function checkDate(one) {
                           return one.dateTime == d.toISOString();
                           }
                            this.listAppoinments=this.listAppoinments.filter(checkDate);
                        }
                        if(FilterDistance) {
                    function checkDistance(one) {
                    if(FilterDistanceType=="equal") {
                        return parseInt(one.distance, 10) == FilterDistance;
                    } else if(FilterDistanceType=="higher") {
                        return parseInt(one.distance, 10) > FilterDistance;
                    } else if(FilterDistanceType=="smaller") {
                        return parseInt(one.distance, 10) < FilterDistance;
                    }
                    
                    }
                            this.listAppoinments=this.listAppoinments.filter(checkDistance);
                        }
                        
                        }
                    Filtering();
            }
        }
    }
}
</script>
