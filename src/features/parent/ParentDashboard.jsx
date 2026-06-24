import React from 'react'
import { useStudents, useVehicles, useDrivers } from '../../services/transportService.js'
import Card from '../../components/ui/Card.jsx'
import Button from '../../components/ui/Button.jsx'
import toast from 'react-hot-toast'
import EmptyState from '../../components/ui/EmptyState.jsx'

export default function ParentDashboard() {
  const { data: students = [] } = useStudents()
  const { data: vehicles = [] } = useVehicles()
  const { data: drivers = [] } = useDrivers()

  const myStudent = students[0]
  if (!myStudent) return <EmptyState title="No child assigned" subtitle="Please contact support." />

  const vehicle = vehicles.find((v) => v.id === myStudent.assignedVehicle)
  const driver = drivers.find((d) => d.id === vehicle?.driverId)

  function markAbsent() {
    toast.success(`${myStudent.name} marked absent today.`)
  }

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-neutral-500">Child</div>
            <div className="text-lg font-semibold">{myStudent.name}</div>
            <div className="text-sm text-neutral-500">{myStudent.class}</div>
          </div>
          <div>
            <Button onClick={markAbsent}>Child Will Not Attend Today</Button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-sm text-neutral-500">Assigned Vehicle</div>
        {vehicle ? (
          <div className="mt-2">
            <div className="font-medium">{vehicle.type} • {vehicle.plate}</div>
            <div className="text-sm text-neutral-500">Pickup: {vehicle.pickupTime}</div>
            <div className="text-sm text-neutral-500">Driver: {driver?.name} • {driver?.mobile}</div>
          </div>
        ) : <div className="text-sm mt-2">No vehicle assigned</div>}
      </Card>
    </div>
  )
}
