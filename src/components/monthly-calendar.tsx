"use client"

import { useState } from "react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns"
import { bn } from "date-fns/locale"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSettings } from "@/store/settings"
import { calculatePrayerTimes } from "@/utils/prayer-times"
import { formatIslamicMonth } from "@/utils/islamic-date"

export function MonthlyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const { selectedLocation } = useSettings()

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" onClick={prevMonth}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-white text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy", { locale: bn })}
          <br />
          <span className="text-sm font-normal">{formatIslamicMonth(currentMonth)}</span>
        </h2>
        <Button variant="ghost" onClick={nextMonth}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"].map((day) => (
          <div key={day} className="text-center text-white/70 text-sm">
            {day}
          </div>
        ))}
        {monthDays.map((day) => {
          const prayerTimes = calculatePrayerTimes(selectedLocation.coordinates, day)
          const fajrTime = format(prayerTimes[0].time, "HH:mm")
          const maghribTime = format(prayerTimes[3].time, "HH:mm")

          return (
            <div key={day.toISOString()} className="text-center p-1 bg-white/10 rounded">
              <div className="text-white">{format(day, "d", { locale: bn })}</div>
              <div className="text-xs text-white/70">{fajrTime}</div>
              <div className="text-xs text-white/70">{maghribTime}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

