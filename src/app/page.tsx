// app/page.tsx
"use client"

import { useState } from "react"
import Background from "../app/(public)/components/Background"
import Header from "../app/(public)/components/Header"
import HeroSection from "../app/(public)/components/HeroSection"
import ProblemSolutionSection from "../app/(public)/components/ProblemSolutionSection"
import FeaturesSection from "../app/(public)/components/FeaturesSection"
import DemoSection from "../app/(public)/components/DemoSection"
import PricingSection from "../app/(public)/components/PricingSection"
import CtaSection from "../app/(public)/components/CtaSection"
import Footer from "../app/(public)/components/Footer"

export default function Home() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative overflow-hidden bg-background">

      {/* NOVO HEADER ADICIONADO AQUI */}
      <Header scrollToSection={scrollToSection} />

      {/* Background Animado */}
      <Background />

      {/* Content wrapper */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <HeroSection scrollToSection={scrollToSection} />

        {/* PROBLEM/SOLUTION SECTION */}
        <ProblemSolutionSection />

        {/* FEATURES SECTION */}
        <FeaturesSection />

        {/* DEMO SECTION */}
        <DemoSection />

        {/* PRICING SECTION */}
        <PricingSection />

        {/* FINAL CTA SECTION */}
        <CtaSection />

        {/* FOOTER */}
        <Footer />

      </div>
    </main>
  )
}