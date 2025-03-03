import { PageContainer } from "@/components/layout/page-container"
import { HeroSection } from "@/components/sections/hero-section"
import { TeamSection } from "@/components/sections/team-section"
import { ServiceSection } from "@/components/sections/service-section"

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <TeamSection />
      <ServiceSection />
    </PageContainer>
  )
}

