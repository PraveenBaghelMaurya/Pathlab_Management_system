import { PageContainer } from "@/components/layout/page-container"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function AboutUsPage() {
  const whyChooseUs = [
    {
      id: 1,
      title: "Accurate & Fast Results",
      description: "Timely reporting with high precision.",
    },
    {
      id: 2,
      title: "Advanced Technology",
      description: "Cutting-edge diagnostic equipment.",
    },
    {
      id: 3,
      title: "Experienced Specialists",
      description: "Highly qualified pathologists and lab technicians.",
    },
    {
      id: 4,
      title: "Affordable & Transparent Pricing",
      description: "Quality healthcare at competitive rates.",
    },
    {
      id: 5,
      title: "Patient-Centric Approach",
      description: "Dedicated to providing the best care and convenience.",
    },
  ]

  return (
    <PageContainer>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h1 className="text-4xl font-bold mb-6">ABOUT US</h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Your Trusted Partner in Diagnostics & Healthcare</h2>
                <p className="text-gray-700">
                  At PATHLAB, we are committed to delivering accurate and reliable diagnostic services with cutting-edge
                  technology and expert healthcare professionals. With a focus on precision, efficiency, and patient
                  care, we provide a comprehensive range of pathology and diagnostic tests to help detect, diagnose, and
                  monitor health conditions effectively.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
                <p className="text-gray-700">
                  Established with a mission to provide world-class diagnostic solutions, PATHLAB has grown into a
                  trusted name in the healthcare industry. Our state-of-the-art laboratory is equipped with advanced
                  medical equipment and follows international quality standards to ensure the highest level of accuracy
                  in test results.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Our Services</h2>
                <ul className="space-y-3">
                  {[
                    "Comprehensive Health Checkups – Preventive health packages tailored to all age groups.",
                    "Pathology Tests – Blood tests, urine tests, and other laboratory investigations.",
                    "Radiology & Imaging – X-rays, ultrasounds, and other imaging diagnostics.",
                    "Specialized Tests – Hormone analysis, cancer markers, genetic tests, and more.",
                    "Home Sample Collection – Hassle-free sample collection at your doorstep.",
                  ].map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="space-y-3">
                  {whyChooseUs.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Our Commitment to Quality</h2>
                <p className="text-gray-700">
                  At PATHLAB, we adhere to strict quality control measures and follow NABL/ISO standards to ensure
                  reliability in every test we conduct. Your health and well-being are our top priorities, and we strive
                  to provide diagnostic excellence with compassion and integrity.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}

