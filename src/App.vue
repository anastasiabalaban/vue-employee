<template>
  <div id="app">
    <sui-container>
      <Menu />
      <router-view/>
    </sui-container>
  </div>
</template>

<script>
// import AllEmployees from './components/AllEmployees.vue'
// import About from './components/About.vue'
import Menu from './components/Menu'

export default {
  name: 'app',
  components: {
    Menu
    // AllEmployees,
    // About
  }
}
</script>
