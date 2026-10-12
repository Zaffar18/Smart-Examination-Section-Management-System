export const exams = [
  { id: 1, code: 'CS-401', name: 'Advanced Database Systems', department: 'Computer Science', date: '2026-05-18', time: '09:00 AM – 12:00 PM', students: 84, status: 'Published', inCharge: 'Dr. Priya Sharma' },
  { id: 2, code: 'EC-302', name: 'Digital Signal Processing', department: 'Electronics', date: '2026-05-20', time: '02:00 PM – 05:00 PM', students: 72, status: 'Published', inCharge: 'Prof. Karthik Rao' },
  { id: 3, code: 'MA-201', name: 'Engineering Mathematics IV', department: 'Mathematics', date: '2026-05-23', time: '09:00 AM – 12:00 PM', students: 96, status: 'Draft', inCharge: 'Dr. Priya Sharma' },
  { id: 4, code: 'HS-110', name: 'Professional Ethics', department: 'Humanities', date: '2026-05-26', time: '02:00 PM – 04:00 PM', students: 54, status: 'Published', inCharge: 'Prof. Meera Nair' },
]

export const rooms = [
  { id: 1, name: 'Main Hall', building: 'Block A', floor: 'Ground', capacity: 120, available: 36, status: 'Available' },
  { id: 2, name: 'Seminar Hall', building: 'Block B', floor: 'First', capacity: 80, available: 8, status: 'Near capacity' },
  { id: 3, name: 'Lab 204', building: 'Block C', floor: 'Second', capacity: 60, available: 60, status: 'Available' },
  { id: 4, name: 'Room 301', building: 'Block A', floor: 'Third', capacity: 48, available: 0, status: 'Full' },
  { id: 5, name: 'Room 302', building: 'Block A', floor: 'Third', capacity: 48, available: 12, status: 'Available' },
]

const firstNames = ['Aarav', 'Diya', 'Rohan', 'Ananya', 'Vivaan', 'Ishita', 'Arjun', 'Meera', 'Kabir', 'Saanvi', 'Aditya', 'Nisha', 'Yash', 'Tara', 'Neil']
const lastNames = ['Sharma', 'Patel', 'Reddy', 'Nair', 'Iyer', 'Menon', 'Verma', 'Das', 'Khan', 'Joshi']
export const students = Array.from({ length: 36 }, (_, index) => ({
  id: index + 1,
  roll: `24${String(index + 1).padStart(3, '0')}`,
  name: `${firstNames[index % firstNames.length]} ${lastNames[index % lastNames.length]}`,
  department: index % 2 ? 'Electronics' : 'Computer Science',
  semester: index % 3 === 0 ? 'IV' : 'VI',
  email: `student${index + 1}@examflow.edu`,
  attendance: index % 5 === 0 ? 'Absent' : index % 4 === 0 ? 'Unmarked' : 'Present',
}))

export const inCharges = ['Dr. Priya Sharma', 'Prof. Karthik Rao', 'Prof. Meera Nair']

export const allocations = [
  { examId: 1, room: 'Main Hall', count: 84, published: true, range: 'A01 – A84' },
  { examId: 2, room: 'Seminar Hall', count: 72, published: true, range: 'B01 – B72' },
  { examId: 4, room: 'Room 302', count: 54, published: false, range: 'C01 – C54' },
]
