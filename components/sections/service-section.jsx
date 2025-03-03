import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "Comprehensive Health Checkups",
    description: "Preventive health packages tailored to all age groups.",
  },
  {
    id: 2,
    title: "Pathology Tests",
    description: "Blood tests, urine tests, and other laboratory investigations.",
  },
  {
    id: 3,
    title: "Radiology & Imaging",
    description: "X-rays, ultrasounds, and other imaging diagnostics.",
  },
  {
    id: 4,
    title: "Specialized Tests",
    description: "Hormone analysis, cancer markers, genetic tests, and more.",
  },
  {
    id: 5,
    title: "Home Sample Collection",
    description: "Hassle-free sample collection at your doorstep.",
  },
]

export function ServiceSection() {
  return (
    <div className="py-12 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-md transition-shadow p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <Check className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

