const tests = [
  "MRI",
  "CT SCAN",
  "BLOOD TEST",
  "x-RAY",
  "ULTRASOUND",
  "ESR",
  "LFT",
  "LIPID",
  "Thyroid Function Test",
  "Urine Routine & Microscopy",
  "Serum Electrolytes",
]

export function TestList() {
  return (
    <ul className="space-y-2">
      {tests.map((test, index) => (
        <li key={index} className="text-gray-700">
          {test}
        </li>
      ))}
    </ul>
  )
}

