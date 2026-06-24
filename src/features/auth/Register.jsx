import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../schemas/authSchemas.js'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Button from '../../components/ui/Button.jsx'
import Input from '../../components/ui/Input.jsx'
import { useVehicles } from '../../services/transportService.js'
import VehicleCard from '../../components/ui/VehicleCard.jsx'

export default function Register() {
  const navigate = useNavigate()
  const { data: vehicles = [] } = useVehicles()
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', mobile: '', password: '', vehicleId: '' }
  })

  function onSubmit(values) {
    toast.success('Registration submitted — awaiting admin approval.')
    navigate('/login')
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Register as Parent</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Input label="Parent name" {...register('name')} />
        <Input label="Mobile number" {...register('mobile')} />
        <Input label="Password" type="password" {...register('password')} />
        <div>
          <div className="text-sm font-medium mb-2">Choose Vehicle</div>
          <div className="grid grid-cols-1 gap-3">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} register={register} fieldName="vehicleId" />
            ))}
          </div>
        </div>
        <Button type="submit">Submit registration</Button>
      </form>
    </div>
  )
}
