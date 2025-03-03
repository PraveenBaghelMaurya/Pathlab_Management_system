import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Chief Pathologist",
    imageUrl: "/doctor1.webp",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Radiologist",
    imageUrl: "/doctor2.jpg",
  },
  {
    id: 3,
    name: "Dr. Robert Williams",
    role: "Lab Director",
    imageUrl: "/doctor3.jpg",
  },
  {
    id: 4,
    name: "Dr. Emily Parker",
    role: "Clinical Pathologist",
    imageUrl: "/doctor4.jpg",
  },
]

export function TeamSection() {
  return (
    <div className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-100 rounded-full -z-10 transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100 rounded-full -z-10 transform translate-x-1/4 translate-y-1/4"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <div className="w-full aspect-square relative mb-4 overflow-hidden rounded-lg">
                  <Image src={member.imageUrl || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-lg text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

