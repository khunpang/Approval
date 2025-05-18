export interface RequestItem {
  id: number
  title: string
  type: string
  dueDate: string
  requestDate: string
  lastUpdated: string
  status: 'Pending' | 'Approved' | 'Rejected'
  approver: string[]
}
