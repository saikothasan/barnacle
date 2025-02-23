export type PrayerName = "fajr" | "dhuhr" | "asr" | "maghrib" | "isha"

export interface PrayerTime {
  name: PrayerName
  time: Date
  nameInBengali: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface LocationInfo {
  name: string
  nameInBengali: string
  coordinates: Coordinates
}

