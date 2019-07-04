<template>
    <div>
             <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="header">
                                <h4 class="title">Create An Appointment</h4>
                            </div>
                            <div class="content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Name </label>
                                                <input type="text" v-model="name" class="form-control" placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Surname</label>
                                                <input type="text" v-model="surname" class="form-control" placeholder="Surname" >
                                            </div>
                                        </div>
                                    </div>

                                     <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>E-mail Address </label>
                                                <input type="text" v-model="email" class="form-control" placeholder="E-mail Address">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="number" v-model="phoneNumber" class="form-control" placeholder="Phone Number" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                                <label>Date</label>
                                                <input type="datetime-local" min="2019-07-04T00:00" v-model="dateTime" class="form-control" placeholder="Phone Number" >
                                        </div>
                                    </div>

                                    <div class="row" style="margin-bottom: 20px; margin-top: 20px;">
                                        <div class="col-md-6">
                                                <label>Starter Position</label>
                                                <input type="text" v-model="starter" disabled class="form-control">
                                        </div>
                                        <div class="col-md-6">
                                                <label>Destination Position</label><br>
                                                <font size="2">(You can select destination address with dragging marker.)</font>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <button @click="calculateDistanceDuration">Calculate Distance and Duration with driving</button>
                                        </div>
                                        <div class="col-md-6" v-if="calculated==true">
                                            <span>Distance: {{distance}}</span><br>
                                            <span>Duration: {{duration}}</span>
                                        </div>
                                        <div v-if="calculateProblem==true">
                                            <span style="color: red">You must drag location marker.</span>
                                        </div>
                                    </div>

                                    <div class="row" style="margin-top: 20px;">
                                        <div class="col-sm-9" >
                                    <google-map name="example" v-on:destinationLongitude="updateDestinationLongitude"  v-on:destinationLatitude="updateDestinationLatitude"></google-map>
                                        </div>
                                    </div>

                                    <button @click="createAnAppointment" class="btn btn-info btn-fill pull-right">Create</button>
                                    <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    </div>

                </div>
            </div>
        </div>
</div>
</template>
<script>
import {post} from 'axios';
import GoogleMap from '../../others/GoogleMap.vue';
export default {
    name: 'Home',
    components: {
        'google-map': GoogleMap
    },
    data() {
        return {
            name: null,
            surname: null,
            email: null,
            phoneNumber: null,
            dateTime: null,
            starter: "Bakırköy/Istanbul",
            starterLatitude: "40.997033110617345",
            starterLongitude: "28.890365352538993",
            destinationLatitude: "40.997033110617345",
            destinationLongitude: "28.890365352538993",
            url: null,
            travellingMode: 'driving',
            distance: null,
            duration: null,
            distanceValue: null,
            durationValue: null,
            calculated: false,
            calculateProblem: false
        }
    },
    methods: {
        createAnAppointment() {
            const {name,surname,email,phoneNumber,dateTime} = this;
            post('/appointment/create', {name,surname,email,phoneNumber}).then(result => {
                if(result.data==true) {

                }
            })
        },
        calculateDistanceDuration() {
            if(this.starterLatitude!=this.destinationLatitude || this.starterLongitude!=this.destinationLongitude) {
            this.url='https://maps.googleapis.com/maps/api/distancematrix/json?origins='+this.starterLatitude+','+this.starterLongitude+'&destinations='+this.destinationLatitude+','+this.destinationLongitude+'&mode='+this.travellingMode+'&language=tr-TR&key=AIzaSyAgaVOdYz6Yu94hVsOvbyo-3v_t6QsDR1E';
            const {url} = this;
            post('/appointment/take', {url}).then(result => {
                const {data: {distance,duration}} =result;
                if(distance && duration) {
                    this.calculateProblem=false;
                    this.distance=distance.text;
                    this.distanceValue=distance.value;
                    this.duration=duration.text;
                    this.durationValue=duration.value;
                    this.calculated=true;
                } else if(result.data==false) {
                    this.calculated=false;
                    this.calculateProblem=true;
                }
            })              
            } else {
                    this.calculated=false;
                    this.calculateProblem=true;
            }
        },
        updateDestinationLongitude(value) {
            this.destinationLongitude=value
        },
        updateDestinationLatitude(value) {
            this.destinationLatitude=value
        }
    }
}
</script>
