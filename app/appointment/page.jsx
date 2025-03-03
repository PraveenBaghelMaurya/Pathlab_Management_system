import { PageContainer } from "@/components/layout/page-container"
import { AppointmentForm } from "@/components/form/appointment-form"
import { Card } from "@/components/ui/card"

export default function AppointmentPage() {
  return (
    <PageContainer>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">APPOINTMENT</h1>
            <AppointmentForm />
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}

