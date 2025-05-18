<script setup lang="ts">
interface Props {
  menu: { name: string; url: string }[]
}

const props = defineProps<Props>()
</script>

<template>
  <nav class="navbar navbar-expand-lg px-4">
    <div class="container-fluid">
      <!-- Title -->
      <span class="navbar-brand fw-bold text-white">Approval Tracking</span>

      <!-- Menu -->
      <div class="d-flex align-items-center gap-3">
        <a v-for="item in props.menu" :key="item.name" :href="item.url" class="nav-link text-white">
          {{ item.name }}
        </a>

        <!-- User Icon -->
        <a href="#" class="nav-link text-white">
          <i class="bi bi-person-circle fs-5"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #0072bc;
}
.nav-link:hover {
  font-weight: bold;
  text-decoration: underline;
}
</style>
