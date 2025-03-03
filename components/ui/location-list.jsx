const locations = [
  { city: "Delhi", type: "main" },
  { city: "Indoor", type: "branch" },
  { city: "Pune", type: "branch" },
  { city: "Tamil", type: "branch" },
  { city: "Odisha", type: "branch" },
  { city: "Haryana", type: "branch" },
  { city: "Rajasthan", type: "branch" },
]

export function LocationList() {
  return (
    <ul className="space-y-2">
      {locations.map((location, index) => (
        <li key={index} className="text-gray-700">
          {location.city}
        </li>
      ))}
    </ul>
  )
}

