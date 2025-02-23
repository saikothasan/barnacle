import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import { bn } from "date-fns/locale"
import type { PrayerTime } from "@/types/prayer"

interface PrayerCardProps {
  prayer: PrayerTime
  isNext: boolean
}

export function PrayerCard({ prayer, isNext }: PrayerCardProps) {
  return (
    <Card className={`p-4 ${isNext ? "bg-primary/10" : "bg-black/20"}`}>
      <div className="flex justify-between items-center text-white">
        <span className="text-lg">{prayer.nameInBengali}</span>
        <span className="text-lg">{format(prayer.time, "hh:mm", { locale: bn })}</span>
      </div>
    </Card>
  )
}

