<template>
  <div class="container py-4">
    <div class="mx-auto" style="max-width: 700px">
      <!-- Back Button -->
      <div class="mb-3">
        <button type="button" class="btn btn-link px-0" @click="goBack">Back to My Requests</button>
      </div>
      <h5 class="mb-4 fw-bold">Request Submission Form</h5>
      <form @submit.prevent="handleSubmit">
        <!-- Title & Request Type -->
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="title" class="form-label">Title *</label>
            <input v-model="form.title" id="title" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label for="requestType" class="form-label">Request Type *</label>
            <select v-model="form.requestType" id="requestType" class="form-select">
              <option>Invoice</option>
              <option>PO</option>
            </select>
          </div>
        </div>

        <!-- Due Date -->
        <div class="mb-3">
          <label for="dueDate" class="form-label">Due Date</label>
          <input v-model="form.dueDate" id="dueDate" type="date" class="form-control" />
        </div>

        <!-- Description -->
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            v-model="form.description"
            id="description"
            class="form-control"
            rows="3"
          ></textarea>
        </div>

        <!-- Amount -->
        <div class="mb-3">
          <label for="amount" class="form-label">Amount (Optional)</label>
          <input v-model="form.amount" id="amount" type="number" class="form-control" />
        </div>

        <!-- Approvers -->
        <div class="mb-3">
          <label for="approvers" class="form-label">Approvers</label>
          <div class="form-control py-2" style="min-height: 58px" @click="focusInput">
            <!-- แสดง Approver ที่เลือกแล้ว -->
            <span
              v-for="(name, index) in form.approvers"
              :key="index"
              class="badge bg-secondary me-1"
            >
              {{ name }}
              <button
                type="button"
                class="btn-close btn-close-white btn-sm ms-2"
                aria-label="Remove"
                @click.stop="removeApprover(index)"
              ></button>
            </span>

            <!-- Input สำหรับพิมพ์ -->
            <input
              ref="approverInput"
              v-model="approverText"
              @keydown.enter.prevent="addApprover"
              @keydown.prevent="handleKeydown"
              @blur="addApprover"
              list="approverList"
              class="border-0"
              style="outline: none"
              placeholder="Type a name and press Enter"
            />
            <datalist id="approverList">
              <option v-for="name in approverOptions" :key="name" :value="name" />
            </datalist>
          </div>
        </div>

        <!-- Attachment -->
        <div class="mb-3">
          <label for="attachment" class="form-label">Attachment (optional)</label>
          <input type="file" id="attachment" class="form-control" @change="handleFileUpload" />
        </div>

        <!-- Submit Button -->
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary btn-lg px-4 rounded-pill">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/my-requests') // หรือ path ที่คุณตั้งไว้ใน router
}

import { ref } from 'vue'

// ========== State ==========
const form = ref({
  title: '',
  requestType: 'Invoice',
  dueDate: '',
  description: '',
  amount: '',
  approvers: [] as string[],
  attachment: null as File | null,
})

const approverText = ref('')
const approverInput = ref<HTMLInputElement | null>(null)

// TODO: fetch approver list from API
const approverOptions = ref<string[]>(['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Dana White'])

// ========== Methods ==========
const addApprover = () => {
  const name = approverText.value.trim()
  if (name && !form.value.approvers.includes(name)) {
    form.value.approvers.push(name)
  }
  approverText.value = ''
}

const removeApprover = (index: number) => {
  form.value.approvers.splice(index, 1)
}

const focusInput = () => {
  approverInput.value?.focus()
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === ' ') {
    addApprover()
  }
}

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    form.value.attachment = input.files[0]
  }
}

// TODO: Replace console.log with API or emit event to parent component
const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.form-label {
  font-weight: 600;
}

.form-control,
.form-select {
  background-color: #f8f9fa;
  border-radius: 0;
  border: 1px solid #ced4da;
  box-shadow: none;
}

.form-control:focus,
.form-select:focus {
  box-shadow: none;
  border-color: #999;
}
</style>
