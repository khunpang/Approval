<template>
  <div class="d-flex align-items-center flex-wrap gap-2">
    <!-- Filter -->
    <div class="d-flex align-items-center gap-2">
      <i class="bi bi-arrow-repeat fs-5"></i>
      <label for="statusFilter" class="me-2 mb-0">Filter by Status:</label>
      <select
        id="statusFilter"
        class="form-select"
        style="width: 150px"
        v-model="selectedStatus"
        @change="$emit('filter-change', selectedStatus)"
      >
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>

    <!-- Search -->
    <div class="input-group" style="width: 250px">
      <span class="input-group-text"><i class="bi bi-search"></i></span>
      <input
        type="text"
        class="form-control"
        placeholder="Search requests"
        v-model="searchTerm"
        @input="$emit('search-change', searchTerm)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedStatus = ref('All')
const searchTerm = ref('')
</script>
