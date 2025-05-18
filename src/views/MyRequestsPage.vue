<template>
  <div class="container">
    <h3 class="my-4 text-start">My Requests</h3>

    <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
      <div class="flex-grow-1">
        <RequestFilterBar @filter-change="onFilterChange" @search-change="onSearchChange" />
      </div>
      <router-link :to="{ name: 'CreateRequest' }">
        <CreateRequestButton />
      </router-link>
    </div>

    <RequestsTable :requests="filteredRequests" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import RequestFilterBar from '@/components/RequestFilterBar.vue'
import CreateRequestButton from '@/components/CreateRequestButton.vue'
import RequestsTable from '@/components/RequestsTable.vue'
import type { RequestItem } from '@/components/types'

const allRequests = ref<RequestItem[]>([
  {
    id: 1,
    title: 'Request',
    type: 'Invoice',
    dueDate: '07/05/2025',
    requestDate: '07/05/2025',
    lastUpdated: '08/05/2025',
    status: 'Pending',
    approver: ['John Doe'],
  },
  {
    id: 2,
    title: 'Request',
    type: 'Invoice',
    dueDate: '04/05/2025',
    requestDate: '04/05/2025',
    lastUpdated: '06/05/2025',
    status: 'Approved',
    approver: ['Jane Smith'],
  },
  {
    id: 3,
    title: 'Request',
    type: 'PO',
    dueDate: '02/05/2025',
    requestDate: '02/05/2025',
    lastUpdated: '03/05/2025',
    status: 'Rejected',
    approver: ['Michael Johnson', 'Jane Smith'],
  },
])

const selectedStatus = ref('All')
const searchTerm = ref('')

const onFilterChange = (status: string) => {
  selectedStatus.value = status
}
const onSearchChange = (term: string) => {
  searchTerm.value = term
}

const filteredRequests = computed(() => {
  return allRequests.value.filter((r) => {
    const matchStatus = selectedStatus.value === 'All' || r.status === selectedStatus.value
    const matchSearch =
      r.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      r.type.toLowerCase().includes(searchTerm.value.toLowerCase())
    return matchStatus && matchSearch
  })
})
</script>
