"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { BANGLADESH_DISTRICTS } from "@/utils/location"
import { useSettings } from "@/store/settings"

export function LocationSelector() {
  const { selectedLocation, setLocation } = useSettings()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDistricts = BANGLADESH_DISTRICTS.filter(
    (district) =>
      district.name.toLowerCase().includes(searchTerm.toLowerCase()) || district.nameInBengali.includes(searchTerm),
  )

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Search districts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-2"
      />
      <Select
        value={selectedLocation.name}
        onValueChange={(value) => {
          const location = BANGLADESH_DISTRICTS.find((district) => district.name === value)
          if (location) setLocation(location)
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a district" />
        </SelectTrigger>
        <SelectContent>
          {filteredDistricts.map((district) => (
            <SelectItem key={district.name} value={district.name}>
              {district.nameInBengali}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

