<template>
    <div>
            <div class="sidebar" data-color="purple" data-image="/assets/img/sidebar-5.jpg">
    	<div class="sidebar-wrapper">
            <div class="logo">
                <a  class="simple-text">
                     Iceberg Estates
                </a>
            </div>

            <ul class="nav">
                <li v-for="menu in menus" v-bind:key="menu.id" v-bind:class="(menu.path==$route.path)?'active':''">
                    <router-link :to="menu.path">
                        <i class="pe-7s-graph"></i>
                        <p>{{menu.name}}</p>
                    </router-link>
                </li>
            </ul>
    	</div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        menus: [{
            id:0,
            name: "Create An Appoıntment",
            path: "/"
        },{id:1,
        name: "Appoıntments",
        path: "/appointments"}
        ]
    }
    }
}
</script>
