// app/page.tsx
"use client"

import { useState } from "react"
import Background from "../components/Background"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import ProblemSolutionSection from "../components/ProblemSolutionSection"
import FeaturesSection from "../components/FeaturesSection"
import DemoSection from "../components/DemoSection"
import PricingSection from "../components/PricingSection"
import CtaSection from "../components/CtaSection"
import Footer from "../components/Footer"

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