import { render, screen } from '@testing-library/react'
import Table from './Table'
import '@testing-library/jest-dom'

const mockData = [
  {
    id: 1,
    engineerId: 101,
    status: 'In Progress',
    startDate: '2023-01-01',
    endDate: '2023-01-15',
    information: 'Site maintenance',
    coords: { lat: 51.9209, lng: -1.1567 }
  },
  {
    id: 2,
    engineerId: 102,
    status: 'Completed',
    startDate: '2023-01-16',
    endDate: '2023-01-30',
    information: 'New installation',
    coords: { lat: 51.9205, lng: -1.1570 }
  }
]

describe('Table Component', () => {
  test('renders table headers correctly', () => {
    render(<Table mapData={mockData} />)

    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Notes')).toBeInTheDocument()
    expect(screen.getByText('Engineer ID')).toBeInTheDocument()
    expect(screen.getByText('Coords [0]')).toBeInTheDocument()
    expect(screen.getByText('Coords [1]')).toBeInTheDocument()
  })

  test('renders data rows based on mapData', () => {
    render(<Table mapData={mockData} />)

    mockData.forEach((location) => {
      expect(screen.getByText(location.id.toString())).toBeInTheDocument()
      expect(screen.getByText(location.information)).toBeInTheDocument()
      expect(screen.getByText(location.engineerId.toString())).toBeInTheDocument()
      expect(screen.getByText(location.coords.lat.toString())).toBeInTheDocument()
      expect(screen.getByText(location.coords.lng.toString())).toBeInTheDocument()
    })
  })
})