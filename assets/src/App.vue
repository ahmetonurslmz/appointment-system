<template>
    <div class="wrapper">
      <app-menu/>
    <div class="main-panel">
        <app-header/>
      <transition name='fade' >
        <router-view></router-view>
      </transition>
    </div>
    </div>
</template>
<script>
import Menu from './components/others/menu.vue';
import Header from './components/others/header.vue';
export default {
  components: {
    'app-menu': Menu,
    'app-header': Header
  }
}
</script>
