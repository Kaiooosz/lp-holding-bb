import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { WhyOffshoreSection } from "@/components/sections/why-offshore-section"
import { ProcessSection } from "@/components/sections/process-section"
import { TeamSection } from "@/components/sections/team-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ArticlesSection } from "@/components/sections/articles-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function HoldingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <WhyOffshoreSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
