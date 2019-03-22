<template>
  <sui-menu pointing>
    <router-link to="/" is="sui-menu-item">Employees</router-link>
    <router-link to="/projects" is="sui-menu-item">Projects</router-link>
    <router-link to="/about" is="sui-menu-item">About</router-link>
    <sui-menu-menu position="right">
      <sui-menu-item>
        <sui-input transparent icon="search" placeholder="Search..." />
      </sui-menu-item>
    </sui-menu-menu>
  </sui-menu>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
