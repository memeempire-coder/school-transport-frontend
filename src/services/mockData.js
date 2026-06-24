export const drivers = [
  { id: 'd1', name: 'Ramesh Kumar', mobile: '9000000001', license: 'DL-12345' },
  { id: 'd2', name: 'Sita Devi', mobile: '9000000002', license: 'DL-67890' }
]

export const vehicles = [
  {
    id: 'v1',
    type: 'Mini Bus',
    plate: 'MH12-AB-1234',
    driverId: 'd1',
    pickupTime: '07:15',
    totalSeats: 20,
    occupiedSeats: 18,
    routeId: 'r1'
  },
  {
    id: 'v2',
    type: 'Van',
    plate: 'MH12-CD-5678',
    driverId: 'd2',
    pickupTime: '07:30',
    totalSeats: 12,
    occupiedSeats: 12,
    routeId: 'r2'
  }
]

export const routes = [
  { id: 'r1', name: 'Northside Route', pickupAreas: ['Village A', 'Village B'], arrivalTime: '08:00', returnTime: '15:30' },
  { id: 'r2', name: 'Eastside Route', pickupAreas: ['Village C'], arrivalTime: '08:10', returnTime: '15:20' }
]

export const parents = [
  { id: 'p1', name: 'Asha Patil', mobile: '9888888881', status: 'approved', childId: 's1', requestedVehicle: 'v1' },
  { id: 'p2', name: 'Kiran Rao', mobile: '9888888882', status: 'pending', childId: 's2', requestedVehicle: 'v2' }
]

export const students = [
  { id: 's1', name: 'Rohit Patil', parentId: 'p1', class: '5A', assignedVehicle: 'v1', assignedRoute: 'r1', absentToday: false },
  { id: 's2', name: 'Maya Rao', parentId: 'p2', class: '3B', assignedVehicle: 'v2', assignedRoute: 'r2', absentToday: false }
]
