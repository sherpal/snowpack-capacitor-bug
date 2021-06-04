import { Geolocation } from "@capacitor/geolocation"

console.log("hello")
const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition()

  console.log("Current position:", coordinates)
}

await printCurrentPosition()
