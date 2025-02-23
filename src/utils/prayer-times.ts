import { PrayerTimes, type Coordinates, CalculationMethod } from "adhan"
import type { PrayerTime } from "@/types/prayer"

const PRAYER_NAMES_BENGALI: Record<string, string> = {
  fajr: "ফজর",
  dhuhr: "যোহর",
  asr: "আসর",
  maghrib: "মাগরিব",
  isha: "ইশা",
}

export function calculatePrayerTimes(coordinates: Coordinates, date: Date = new Date()): PrayerTime[] {
  const params = CalculationMethod.MoonsightingCommittee()
  const prayerTimes = new PrayerTimes(coordinates, date, params)

  return ["fajr", "dhuhr", "asr", "maghrib", "isha"].map((prayer) => ({
    name: prayer as PrayerTime["name"],
    time: prayerTimes[prayer],
    nameInBengali: PRAYER_NAMES_BENGALI[prayer],
  }))
}

export function getNextPrayer(prayerTimes: PrayerTime[]): PrayerTime | null {
  const now = new Date()
  return prayerTimes.find((prayer) => prayer.time > now) || null
}

