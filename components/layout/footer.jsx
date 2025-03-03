import { TestList } from "@/components/ui/test-list"
import { LocationList } from "@/components/ui/location-list"
import { PaymentMethods } from "@/components/ui/payment-methods"

export function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Available Test</h3>
          <TestList />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">We are Available at</h3>
          <LocationList />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">We Accept</h3>
          <PaymentMethods />
        </div>
      </div>
    </footer>
  )
}

