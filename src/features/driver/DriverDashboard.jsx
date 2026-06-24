import React, { useState } from 'react'
import { useStudents, useVehicles } from '../../services/transportService.js'
import Card from '../../components/ui/Card.jsx'
import TanStackTable from '../../components/table/TanStackTable.jsx'
import Button from '../../components/ui/Button.jsx'

export default function DriverDashboard() {
  const { data: students = [] } = useStudents()
  const { data: vehicles = [] } = useVehicles()
  const [status, setStatus] = useState('Ready')

  const columns = [
    { accessorKey: 'name', header: 'Student' },
    { accessorKey: 'parentName', header: 'Parent' },
    { accessorKey: 'mobile', header: 'Contact' },
    { accessorKey: 'absentToday', header: 'Absent', cell: ({ getValue }) => (getValue() ? 'Yes' : 'No') }
  ]
  const tableData = students.map((s) => ({ id: s.id, name: s.name, parentName: 'Parent', mobile: '—', absentToday: s.absentToday }))

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-neutral-500">Vehicle</div>
            <div className="font-semibold">Assigned vehicle info</div>
          </div>
          <div className="space-x-2">
            <Button onClick={() => setStatus('Picking Students')}>Picking Students</Button>
            <Button onClick={() => setStatus('Reached School')}>Reached School</Button>
          </div>
        </div>
        <div className="mt-2 text-sm text-neutral-600">Current: <span className="font-medium">{status}</span></div>
      </Card>

      <Card>
        <div className="text-sm font-medium mb-2">Students on route</div>
        <TanStackTable columns={columns} data={tableData} />
      </Card>
    </div>
  )
}
