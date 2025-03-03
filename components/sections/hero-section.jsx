import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gray-50 rounded-b-[40px] md:rounded-b-[80px]">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-white via-transparent to-transparent rounded-bl-[200px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-sky-400 mb-4">
              Book Your Appointment <span className="text-emerald-300">NOW</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              Get professional diagnostic services with our team of experts. Fast, accurate, and reliable results.
            </p>
            <Button size="lg" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" href="./appointment">
              BOOK NOW
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <Image
                src="./hero1.jpg"
                alt="Medical team"
                width={250}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="./hero2.jpg"
                alt="Lab technician"
                width={250}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="./hero3.jpg"
                alt="MRI machine"
                width={250}
                height={200}
                className="rounded-lg"
              />
              <Image
                src="./hero4.jpg"
                alt="Blood test"
                width={250}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-400 mb-12">Our Qualified Team members</h2>
      </div>
    </div>
  )
}

