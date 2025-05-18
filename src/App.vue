<template>
  <div id="app">
    <NavbarItem :menu="menuData" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavbarItem from './components/NavbarItem.vue'
import { RouterView } from 'vue-router'

const menuData = [
  { name: 'My Requests', url: '/' },
  { name: 'Approval', url: '/' },
  { name: 'Admin', url: '/' },
]
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
