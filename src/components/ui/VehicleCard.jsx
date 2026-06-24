import React from 'react'
import { drivers } from '../../services/mockData.js'

export default function VehicleCard({ vehicle, register, fieldName }) {
  const driver = drivers.find((d) => d.id === vehicle.driverId) || {}
  const available = Math.max(0, vehicle.totalSeats - vehicle.occupiedSeats)
  const full = available === 0

  return (
    <label className={`flex items-center justify-between p-3 border rounded ${full ? 'opacity-60' : ''}`}>
      <div>
        <div className="font-medium">{vehicle.type} — {vehicle.plate}</div>
        <div className="text-sm text-neutral-500">Driver: {driver.name} • Pickup: {vehicle.pickupTime}</div>
        <div className="text-sm mt-1">
          Seats: {vehicle.occupiedSeats}/{vehicle.totalSeats} • <span className={`${full ? 'text-danger' : 'text-success'}`}>{full ? 'FULL' : `${available} left`}</span>
        </div>
      </div>
      <div>
        <input type="radio" value={vehicle.id} {...(register ? register(fieldName) : {})} disabled={full} />
      </div>
    </label>
  )
}
