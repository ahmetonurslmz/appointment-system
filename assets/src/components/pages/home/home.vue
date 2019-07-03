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
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="text" v-model="phoneNumber" class="form-control" placeholder="Phone Number" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                                <label>Date</label>
                                                <input type="date" v-model="date" class="form-control" placeholder="Phone Number" >
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6">
                                            <GmapMap
  v-bind:center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="height: 225px"
>
  <GmapMarker
    v-bind:key="index"
    v-for="(m, index) in markers"
    v-bind:position="m.position"
    v-bind:clickable="true"
  />
</GmapMap>
                                        </div>
                                    </div>

                                    <button @click="createAnAppointment" class="btn btn-info btn-fill pull-right">Create</button>
                                    <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-user">
                            <div class="image">
                                <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
                            </div>
                            <div class="content">
                                <div class="author">
                                     <a href="#">
                                    <img class="avatar border-gray" src="/assets/img/faces/face-3.jpg" alt="..."/>

                                      <h4 class="title">Mike Andrew<br />
                                         <small>michael24</small>
                                      </h4>
                                    </a>
                                </div>
                                <p class="description text-center"> "Lamborghini Mercy <br>
                                                    Your chick she so thirsty <br>
                                                    I'm in that two seat Lambo"
                                </p>
                            </div>
                            <hr>
                            <div class="text-center">
                                <button href="#" class="btn btn-simple"><i class="fa fa-facebook-square"></i></button>
                                <button href="#" class="btn btn-simple"><i class="fa fa-twitter"></i></button>
                                <button href="#" class="btn btn-simple"><i class="fa fa-google-plus-square"></i></button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</div>
</template>
<script>
import {post} from 'axios';
export default {
    name: 'Home',
    data() {
        return {
            name: null,
            surname: null,
            email: null,
            phoneNumber: null,
            date: null,
            center: {lat: 10.0,lng: 10.0},
            markers: [{
                position: {lat: 10.0,lng: 10.0}}, {
                    position: {lat: 11.0,lng: 11.0}
                }
            ]
        }
    },
    methods: {
        createAnAppointment() {
            const {name,surname,email,phoneNumber} = this;
            post('/appointment/create', {name,surname,email,phoneNumber}).then(result => {
                if(result.data==true) {

                }
            })
        }
    }
}
</script>
