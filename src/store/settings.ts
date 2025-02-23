import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { LocationInfo } from "@/types/prayer"
import { BANGLADESH_DISTRICTS } from "@/utils/location"
import { CalculationMethod } from "adhan"

interface SettingsState {
  selectedLocation: LocationInfo
  notificationsEnabled: boolean
  calculationMethod: CalculationMethod
  adjustments: {
    fajr: number
    dhuhr: number
    asr: number
    maghrib: number
    isha: number
  }
  setLocation: (location: LocationInfo) => void
  toggleNotifications: () => void
  setCalculationMethod: (method: CalculationMethod) => void
  setAdjustment: (prayer: keyof SettingsState["adjustments"], minutes: number) => void
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      selectedLocation: BANGLADESH_DISTRICTS[0],
      notificationsEnabled: false,
      calculationMethod: CalculationMethod.MoonsightingCommittee(),
      adjustments: {
        fajr: 0,
        dhuhr: 0,
        asr: 0,
        maghrib: 0,
        isha: 0,
      },
      setLocation: (location) => set({ selectedLocation: location }),
      toggleNotifications: () => set((state) => ({ notificationsEnabled: !state.notificationsEnabled })),
      setCalculationMethod: (method) => set({ calculationMethod: method }),
      setAdjustment: (prayer, minutes) =>
        set((state) => ({
          adjustments: { ...state.adjustments, [prayer]: minutes },
        })),
    }),
    {
      name: "prayer-settings",
    },
  ),
)

