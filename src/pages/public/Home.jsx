import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card.jsx'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <section className="bg-white rounded p-4">
        <h1 className="text-2xl font-semibold">Safe, Reliable School Transport</h1>
        <p className="text-sm text-neutral-600 mt-2">Enterprise-grade safety, SMS updates, driver tracking, and route management.</p>
        <div className="mt-4 flex gap-2">
          <Link to="/register" className="px-3 py-2 bg-primary-500 text-white rounded">Register your child</Link>
          <Link to="/login" className="px-3 py-2 border rounded">Login</Link>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Available Routes</h3>
        <div className="grid gap-3 mt-3">
          <Card>
            <div className="flex justify-between">
              <div>
                <div className="font-medium">Northside Route</div>
                <div className="text-sm text-neutral-500">Pickup: Village A, Village B • Arrival: 08:00</div>
              </div>
              <div className="text-sm text-primary-500">Seats available</div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between">
              <div>
                <div className="font-medium">Eastside Route</div>
                <div className="text-sm text-neutral-500">Pickup: Village C • Arrival: 08:10</div>
              </div>
              <div className="text-sm text-danger">Full</div>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Contact</h3>
        <div className="text-sm text-neutral-500 mt-2">Phone: +91 90000 00000 • Email: support@schooltransport.example</div>
      </section>
    </div>
  )
}
