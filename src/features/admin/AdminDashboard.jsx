import React from 'react'
import { useStudents, useVehicles, useDrivers } from '../../services/transportService.js'
import Card from '../../components/ui/Card.jsx'

export default function AdminDashboard() {
  const { data: students = [] } = useStudents()
  const { data: vehicles = [] } = useVehicles()
  const { data: drivers = [] } = useDrivers()

  const totalStudents = students.length
  const totalVehicles = vehicles.length
  const totalDrivers = drivers.length

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Card><div className="text-sm text-neutral-500">Students</div><div className="text-xl font-semibold">{totalStudents}</div></Card>
        <Card><div className="text-sm text-neutral-500">Vehicles</div><div className="text-xl font-semibold">{totalVehicles}</div></Card>
        <Card><div className="text-sm text-neutral-500">Drivers</div><div className="text-xl font-semibold">{totalDrivers}</div></Card>
        <Card><div className="text-sm text-neutral-500">Pending Approvals</div><div className="text-xl font-semibold">2</div></Card>
      </div>

      <Card>
        <div className="text-sm font-medium">Reports / Charts</div>
        <div className="mt-4 text-sm text-neutral-500">Placeholder for Recharts graphs (ridership, seat utilization)</div>
      </Card>
    </div>
  )
}
