import { MapPin, Phone, Smartphone, Clock, Mail, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { InfoList } from "@/components/ui/info-list"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Our Location",
      value: "PATHLAB, NEW DELHI, NANGOLI, DELHI, 110046",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9999999999",
      href: "tel:+919999999999",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      label: "Mobile",
      value: "9999999999",
      href: "tel:9999999999",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Landline",
      value: "011 999999",
      href: "tel:011999999",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email Us",
      value: "pathlab@gmail.com",
      href: "mailto:pathlab@gmail.com",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Visit Our Website",
      value: "www.pathlab.in",
      href: "https://www.pathlab.in",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Lab Timings",
      value: "Monday – Saturday: [11:00 am] – [8:00 pm]",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "",
      value: "Sunday & Holidays: [11:00 am] – [5:00 pm]",
    },
  ]

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <h2 className="text-4xl font-bold mb-6">CONTACT US</h2>
          <p className="text-lg mb-2">Get in Touch with Us</p>
          <p className="text-gray-700 mb-8">
            We are here to assist you with all your diagnostic needs. Whether you have a query, need to book a test, or
            require assistance, feel free to reach out to us. Our team is always ready to provide you with the best
            healthcare services.
          </p>

          <InfoList items={contactInfo} className="mt-8" />

          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold text-lg mb-4">Home Sample Collection Available</h3>
            <p className="text-gray-700">
              Can't visit the lab? We offer home sample collection for your convenience. Call us or book online to
              schedule an appointment at your preferred time.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

