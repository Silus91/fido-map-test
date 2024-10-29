declare namespace FidoTest {

  export interface Coord {
    lat: number
    lng: number
  }

  export interface MapDataItem {
    id: number
    engineerId: number
    status?: string
    startDate?: string
    endDate?: string
    information: string
    coords: Coord
  }
}