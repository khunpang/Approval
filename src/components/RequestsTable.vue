<!-- src/components/RequestsTable.vue -->
<template>
  <div class="table-responsive">
    <table class="table table-hover w-100">
      <thead>
        <tr>
          <th>Title</th>
          <th>Request Type</th>
          <th>Due Date</th>
          <th>Request Date</th>
          <th>Last Updated</th>
          <th>Status</th>
          <th>Approver</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.id">
          <td>{{ request.title }}</td>
          <td>{{ request.type }}</td>
          <td>{{ request.dueDate }}</td>
          <td>{{ request.requestDate }}</td>
          <td>{{ request.lastUpdated }}</td>
          <td>
            <span
              class="badge"
              :class="{
                'bg-warning text-dark': request.status === 'Pending',
                'bg-success': request.status === 'Approved',
                'bg-danger': request.status === 'Rejected',
              }"
            >
              {{ request.status }}
            </span>
          </td>
          <td>{{ request.approver.join(', ') }}</td>
          <td>
            <button class="btn btn-outline-primary btn-sm">View Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
interface RequestItem {
  id: number
  title: string
  type: string
  dueDate: string
  requestDate: string
  lastUpdated: string
  status: 'Pending' | 'Approved' | 'Rejected'
  approver: string[]
}

defineProps<{ requests: RequestItem[] }>()
</script>

<style scoped>
.table td,
.table th {
  padding: 1rem;
}
</style>
