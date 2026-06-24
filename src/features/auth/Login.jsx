import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../schemas/authSchemas.js'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/authSlice.js'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/ui/Input.jsx'
import Button from '../../components/ui/Button.jsx'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { mobile: '', password: '' }
  })

  function onSubmit(values) {
    const { mobile } = values
    const role = mobile.endsWith('1') ? 'parent' : mobile.endsWith('2') ? 'driver' : 'admin'
    const user = { id: mobile, name: 'Mock User', role, mobile }
    dispatch(setUser(user))
    toast.success('Logged in')
    navigate(`/app/${role}`)
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Input label="Mobile number" {...register('mobile')} />
        <Input type="password" label="Password" {...register('password')} />
        <Button type="submit" disabled={formState.isSubmitting}>Sign in</Button>
      </form>
    </div>
  )
}
