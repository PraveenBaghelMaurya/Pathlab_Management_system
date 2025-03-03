import Image from "next/image"

export function PaymentMethods() {
  const paymentOptions = [
    { name: "Google Pay", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Phone Pay", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Paytm", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Amazon Pay", logo: "/placeholder.svg?height=40&width=40" },
    { name: "All UPI", logo: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div>
      <ul className="space-y-2 mb-4">
        {paymentOptions.map((option, index) => (
          <li key={index} className="text-gray-700">
            {option.name}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 mt-6">
        {/* Payment logos */}
        <Image src="/placeholder.svg?height=40&width=40" alt="PayPal" width={40} height={40} />
        <Image src="/placeholder.svg?height=40&width=40" alt="Google Pay" width={40} height={40} />
        <Image src="/placeholder.svg?height=40&width=40" alt="Mastercard" width={40} height={40} />
      </div>
    </div>
  )
}

