import type { LocationInfo } from "@/types/prayer"

interface Coordinates {
  latitude: number
  longitude: number
}

export const BANGLADESH_DISTRICTS: LocationInfo[] = [
  { name: "Dhaka", nameInBengali: "ঢাকা", coordinates: { latitude: 23.8103, longitude: 90.4125 } },
  { name: "Chittagong", nameInBengali: "চট্টগ্রাম", coordinates: { latitude: 22.3569, longitude: 91.7832 } },
  { name: "Khulna", nameInBengali: "খুলনা", coordinates: { latitude: 22.8456, longitude: 89.5403 } },
  { name: "Rajshahi", nameInBengali: "রাজশাহী", coordinates: { latitude: 24.3745, longitude: 88.6042 } },
  { name: "Barisal", nameInBengali: "বরিশাল", coordinates: { latitude: 22.701, longitude: 90.3535 } },
  { name: "Sylhet", nameInBengali: "সিলেট", coordinates: { latitude: 24.8949, longitude: 91.8687 } },
  { name: "Rangpur", nameInBengali: "রংপুর", coordinates: { latitude: 25.7439, longitude: 89.2752 } },
  { name: "Mymensingh", nameInBengali: "ময়মনসিংহ", coordinates: { latitude: 24.7471, longitude: 90.4203 } },
  { name: "Comilla", nameInBengali: "কুমিল্লা", coordinates: { latitude: 23.4607, longitude: 91.1809 } },
  { name: "Narayanganj", nameInBengali: "নারায়ণগঞ্জ", coordinates: { latitude: 23.6238, longitude: 90.5 } },
  { name: "Gazipur", nameInBengali: "গাজীপুর", coordinates: { latitude: 24.0958, longitude: 90.4125 } },
  { name: "Bogra", nameInBengali: "বগুড়া", coordinates: { latitude: 24.8465, longitude: 89.3729 } },
  { name: "Jessore", nameInBengali: "যশোর", coordinates: { latitude: 23.1681, longitude: 89.2137 } },
  { name: "Dinajpur", nameInBengali: "দিনাজপুর", coordinates: { latitude: 25.6217, longitude: 88.6354 } },
  { name: "Tangail", nameInBengali: "টাঙ্গাইল", coordinates: { latitude: 24.2513, longitude: 89.9167 } },
  { name: "Faridpur", nameInBengali: "ফরিদপুর", coordinates: { latitude: 23.607, longitude: 89.8429 } },
  { name: "Jamalpur", nameInBengali: "জামালপুর", coordinates: { latitude: 24.9196, longitude: 89.9481 } },
  { name: "Pabna", nameInBengali: "পাবনা", coordinates: { latitude: 24.0064, longitude: 89.2372 } },
  { name: "Patuakhali", nameInBengali: "পটুয়াখালী", coordinates: { latitude: 22.3596, longitude: 90.3298 } },
  { name: "Noakhali", nameInBengali: "নোয়াখালী", coordinates: { latitude: 22.8724, longitude: 91.0973 } },
  { name: "Sirajganj", nameInBengali: "সিরাজগঞ্জ", coordinates: { latitude: 24.4533, longitude: 89.7006 } },
  { name: "Narsingdi", nameInBengali: "নরসিংদী", coordinates: { latitude: 23.9322, longitude: 90.7177 } },
  { name: "Rangamati", nameInBengali: "রাঙ্গামাটি", coordinates: { latitude: 22.657, longitude: 92.1779 } },
  { name: "Habiganj", nameInBengali: "হবিগঞ্জ", coordinates: { latitude: 24.384, longitude: 91.4169 } },
  { name: "Coxs Bazar", nameInBengali: "কক্সবাজার", coordinates: { latitude: 21.4272, longitude: 92.0058 } },
  { name: "Bhola", nameInBengali: "ভোলা", coordinates: { latitude: 22.6876, longitude: 90.6528 } },
  { name: "Lakshmipur", nameInBengali: "লক্ষ্মীপুর", coordinates: { latitude: 22.9447, longitude: 90.8282 } },
  { name: "Kushtia", nameInBengali: "কুষ্টিয়া", coordinates: { latitude: 23.9088, longitude: 89.122 } },
  { name: "Chandpur", nameInBengali: "চাঁদপুর", coordinates: { latitude: 23.2332, longitude: 90.6712 } },
  { name: "Shariatpur", nameInBengali: "শরীয়তপুর", coordinates: { latitude: 23.2423, longitude: 90.4348 } },
  { name: "Brahmanbaria", nameInBengali: "ব্রাহ্মণবাড়িয়া", coordinates: { latitude: 23.9608, longitude: 91.1115 } },
  { name: "Sunamganj", nameInBengali: "সুনামগঞ্জ", coordinates: { latitude: 25.0658, longitude: 91.405 } },
  { name: "Madaripur", nameInBengali: "মাদারীপুর", coordinates: { latitude: 23.1644, longitude: 90.1897 } },
  { name: "Munshiganj", nameInBengali: "মুন্সিগঞ্জ", coordinates: { latitude: 23.5422, longitude: 90.5305 } },
  { name: "Gopalganj", nameInBengali: "গোপালগঞ্জ", coordinates: { latitude: 23.0488, longitude: 89.8879 } },
  { name: "Kishoreganj", nameInBengali: "কিশোরগঞ্জ", coordinates: { latitude: 24.426, longitude: 90.9821 } },
  { name: "Moulvibazar", nameInBengali: "মৌলভীবাজার", coordinates: { latitude: 24.4829, longitude: 91.7774 } },
  { name: "Natore", nameInBengali: "নাটোর", coordinates: { latitude: 24.4108, longitude: 89.0075 } },
  { name: "Pirojpur", nameInBengali: "পিরোজপুর", coordinates: { latitude: 22.5791, longitude: 89.972 } },
  { name: "Jhenaidah", nameInBengali: "ঝিনাইদহ", coordinates: { latitude: 23.545, longitude: 89.1726 } },
  { name: "Nilphamari", nameInBengali: "নীলফামারী", coordinates: { latitude: 25.9317, longitude: 88.856 } },
  { name: "Narail", nameInBengali: "নড়াইল", coordinates: { latitude: 23.1725, longitude: 89.5127 } },
  { name: "Chuadanga", nameInBengali: "চুয়াডাঙ্গা", coordinates: { latitude: 23.6401, longitude: 88.8418 } },
  { name: "Feni", nameInBengali: "ফেনী", coordinates: { latitude: 23.0159, longitude: 91.3976 } },
  { name: "Panchagarh", nameInBengali: "পঞ্চগড়", coordinates: { latitude: 26.3411, longitude: 88.5541 } },
  { name: "Barguna", nameInBengali: "বরগুনা", coordinates: { latitude: 22.0953, longitude: 90.1121 } },
  { name: "Jhalokati", nameInBengali: "ঝালকাঠি", coordinates: { latitude: 22.6406, longitude: 90.1987 } },
  { name: "Thakurgaon", nameInBengali: "ঠাকুরগাঁও", coordinates: { latitude: 26.0336, longitude: 88.4616 } },
  { name: "Bandarban", nameInBengali: "বান্দরবান", coordinates: { latitude: 22.1953, longitude: 92.2185 } },
  { name: "Lalmonirhat", nameInBengali: "লালমনিরহাট", coordinates: { latitude: 25.9923, longitude: 89.2847 } },
  { name: "Gaibandha", nameInBengali: "গাইবান্ধা", coordinates: { latitude: 25.3297, longitude: 89.543 } },
  { name: "Satkhira", nameInBengali: "সাতক্ষীরা", coordinates: { latitude: 22.7185, longitude: 89.0705 } },
  { name: "Netrokona", nameInBengali: "নেত্রকোণা", coordinates: { latitude: 24.8103, longitude: 90.729 } },
  { name: "Magura", nameInBengali: "মাগুরা", coordinates: { latitude: 23.4897, longitude: 89.4198 } },
  { name: "Sherpur", nameInBengali: "শেরপুর", coordinates: { latitude: 25.0204, longitude: 90.0152 } },
  { name: "Bagerhat", nameInBengali: "বাগেরহাট", coordinates: { latitude: 22.6515, longitude: 89.7859 } },
  { name: "Joypurhat", nameInBengali: "জয়পুরহাট", coordinates: { latitude: 25.0957, longitude: 89.0283 } },
  { name: "Meherpur", nameInBengali: "মেহেরপুর", coordinates: { latitude: 23.7621, longitude: 88.6318 } },
  { name: "Khagrachhari", nameInBengali: "খাগড়াছড়ি", coordinates: { latitude: 23.1192, longitude: 91.9846 } },
  { name: "Kurigram", nameInBengali: "কুড়িগ্রাম", coordinates: { latitude: 25.8072, longitude: 89.6295 } },
]

export const BANGLADESH_CITIES = BANGLADESH_DISTRICTS.slice(0, 8)

export async function getCurrentLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (error) => {
          reject(error)
        },
      )
    } else {
      reject(new Error("Geolocation is not supported by this browser."))
    }
  })
}

export function findNearestDistrict(coords: Coordinates): LocationInfo {
  return BANGLADESH_DISTRICTS.reduce((nearest, district) => {
    const distToNearest = getDistance(coords, nearest.coordinates)
    const distToDistrict = getDistance(coords, district.coordinates)
    return distToDistrict < distToNearest ? district : nearest
  }, BANGLADESH_DISTRICTS[0])
}

function getDistance(coords1: Coordinates, coords2: Coordinates): number {
  const R = 6371 // Earth's radius in km
  const dLat = toRad(coords2.latitude - coords1.latitude)
  const dLon = toRad(coords2.longitude - coords1.longitude)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coords1.latitude)) * Math.cos(toRad(coords2.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(value: number): number {
  return (value * Math.PI) / 180
}

