import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as mock from './mockData.js'

const wait = (ms = 250) => new Promise((r) => setTimeout(r, ms))

export function useVehicles() {
  return useQuery(['vehicles'], async () => {
    await wait()
    return mock.vehicles
  })
}

export function useDrivers() {
  return useQuery(['drivers'], async () => {
    await wait()
    return mock.drivers
  })
}

export function useRoutes() {
  return useQuery(['routes'], async () => {
    await wait()
    return mock.routes
  })
}

export function useStudents() {
  return useQuery(['students'], async () => {
    await wait()
    return mock.students
  })
}

export function useApproveParent() {
  const qc = useQueryClient()
  return useMutation(
    async ({ parentId }) => {
      await wait(200)
      return { parentId, status: 'approved' }
    },
    {
      onSuccess: () => qc.invalidateQueries(['parents'])
    }
  )
}
