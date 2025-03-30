"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, CreditCard, LineChart, MessageSquare, Shield, Star } from "lucide-react"
import { Dashboard } from "@/components/dashboard"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LoginForm } from "@/components/login-form"

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setShowLoginDialog(false)
  }

  const handleOrderClick = () => {
    if (isLoggedIn) {
      // User is already logged in, show dashboard
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Show login dialog
      setShowLoginDialog(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#home" className="flex items-center gap-2">
              <Image src="/images/vikriti-logo.png" alt="Vikriti Logo" width={48} height={48} className="h-10 w-auto" />
              <span className="text-2xl font-bold text-[#137b58]">Vikriti</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              About
            </Link>
            <Link href="#features" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              Features
            </Link>
            <Link href="#products" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              Products
            </Link>
            <Link href="#faq" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              FAQ
            </Link>
            <Link href="#team" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              Our Team
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Button variant="link" className="hidden sm:block" onClick={() => setIsLoggedIn(true)}>
                  Sign In
                </Button>
                <Button style={{ backgroundColor: "#137b58" }} onClick={handleOrderClick}>
                  Place an Order
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <>
            {/* Hero Section */}
            <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/wheat-field.jpg"
                  alt="Wheat Field Background"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="container relative z-10 px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                      Harvesting Sustainability for a Greener Future
                      </h1>
                      <p className="max-w-[600px] text-gray-200 md:text-xl">
                        We connect farmers with industries like biofuels, biofertilizers, and biochemicals, ensuring
                        fair pricing, seamless logistics, and sustainable solutions for a greener future.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Button
                        size="lg"
                        className="gap-1 bg-[#137b58] text-white hover:bg-white hover:text-[#137b58]"
                        onClick={handleOrderClick}
                      >
                        Place an Order <ChevronRight className="h-4 w-4" />
                      </Button>
                      <a href="#about">
                      <Button
                        size="lg"
                        className="gap-1 bg-[#137b58] text-white hover:bg-white hover:text-[#137b58]"
                      >
                        Learn More <ChevronRight className="h-4 w-4" />
                      </Button>
                      </a>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-white text-white" />
                      <Star className="h-4 w-4 fill-white text-white" />
                      <Star className="h-4 w-4 fill-white text-white" />
                      <Star className="h-4 w-4 fill-white text-white" />
                      <span className="ml-2 text-gray-200">Trusted by over 10,000+ farmers worldwide</span>
                    </div>
                  </div>
                  <div className="relative z-10 mx-auto overflow-hidden rounded-[1rem] bg-transparent backdrop-blur-sm p-4 sm:w-full lg:order-last max-w-[500px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow duration-300">
                    <div className="grid grid-cols-2 gap-2">
                      {/* Top Left Image */}
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                          src="/images/Pellets.jpg"
                          alt="Biomass Pellets"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Top Right Image */}
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                          src="/images/Briquettes.jpg"
                          alt="Briquettes"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Bottom Left Image */}
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                          src="/images/Raw.jpg"
                          alt="Raw Biomass"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Bottom Right Image */}
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                          src="/images/BR.jpg"
                          alt="Biomass Processing"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Vikriti Section */}
            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
                  <div className="relative w-[650px] h-[600px]">
                    <Image
                      src="/images/PR.jpeg"
                      width={500}
                      height={500}
                      alt="Vikriti Device"
                      className="absolute top-0 left-0 rounded-lg object-cover w-[500px] h-[400px] shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
                    />
                    <Image
                      src="/images/farmer.png"
                      width={250}
                      height={250}
                      alt="Vikriti Device"
                      className="absolute bottom-20 right-0 rounded-lg object-cover w-[300px] h-[300px] shadow-[0_8px_30px_rgba(0,0,0,0.9)] z-10"
                    />
                  </div>
                  <div className="flex flex-col top-2 space-y-4 ">
                    <span className="text-[#00A76F] text-2xl">HARVEST. PROCESS. DELIVER. SUSTAIN.</span>
                    <div className="space-y-7">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                        What is Vikriti?
                      </h2>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl leading-loose mb-8">
                        Introducing Vikriti, a digital platform that aims to facilitate streamlined access
                        to the biomass supply chain for farmers as well as industries, with quality
                        assurance solutions for industries like Biofuel producers, Biofertilizer factories,
                        Biochemical producers, among others.
                      </p>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl leading-loose">
                        We seek to connect multiple industrial entities with a direct, reliable, and consistent supply of agricultural biomass, reducing inefficiencies and ensuring sustainability. By leveraging technology, Vikriti optimizes procurement, processing, and delivery, creating a seamless ecosystem for all stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full py-8 md:py-16 lg:py-20 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="space-y-1">
                    <h2 className="section-heading text-6xl">
                      Features
                    </h2>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#137b58]">
                      Optimizing and Simplifying Biomass Supply
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-2">
                      Seamless sourcing, assured quality and the best prices - all in one platform designed for your business needs
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-center gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-4 pt-3 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#137b58]/10 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#137b58]">
                          <path d="M12 22V2M2 12h20M12 22a30 30 0 0 0 8.5-2M12 22a30 30 0 0 1-8.5-2M17.5 4.5a30 30 0 0 0 0 15M6.5 4.5a30 30 0 0 1 0 15"/>
                        </svg>
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#137b58]">Year-Round Supply</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg">
                      Ensure a consistent and reliable biomass supply with our optimized sourcing network, reducing seasonal shortages and procurement challenges
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="p-4 pt-3 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#137b58]/10 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#137b58]">
                          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/>
                          <path d="m8 12 3 3 5-5"/>
                        </svg>
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#137b58]">Quality Grading</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg">
                      Access verified, graded biomass with real-time quality assessments, ensuring efficiency and compliance with industry standards.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="p-4 pt-3 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#137b58]/10 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#137b58]">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#137b58]">Competitive Pricing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg">
                      Get transparent, market-driven pricing that ensures cost efficiency while maximizing value for both suppliers and buyers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4 mb-12">
                  <h2 className="section-heading text-6xl text-center">What We Stand For</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                  {/* Logo and Semi-circular Text */}
                  <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                    <div className="absolute w-[350px] h-[350px] border-2 border-[#00A76F]/20 rounded-full flex items-center justify-center">
                      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-4xl font-bold text-[#00A76F] bg-white px-4">
                        Vikriti
                      </div>
                    </div>
                    <Image
                      src="/images/vikriti-logo.png"
                      alt="Vikriti Logo"
                      width={300}
                      height={300}
                      className="relative z-10"
                    />
                  </div>

                  {/* Cards Container */}
                  <div className="flex-1 flex flex-col gap-8">
                    {/* Mission Card */}
                    <div className="flex items-start gap-4 rounded-2xl bg-[#2065D1]/10 p-8 relative">
                      <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#2065D1]"></div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold tracking-tighter text-[#2065D1]">Mission</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          India produces over 800 million tonnes of agricultural residue, out of which over 250 million tonnes is burnt or wasted. Vikriti aims to solve for this 250MMT wasted residue, and strives to put the entire 800+ MMT biomass to its best utilisation, while creating value for farmers, and help India achieve its social and environmental goals.
                        </p>
                      </div>
                    </div>

                    {/* Vision Card */}
                    <div className="flex items-start gap-4 rounded-2xl bg-[#00A76F]/10 p-8 relative">
                      <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#00A76F]"></div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold tracking-tighter text-[#00A76F]">Vision</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          Vikriti envisions a future where every unit of biomass produced in India is efficiently utilized, ensuring minimal waste and maximum value creation for all stakeholders. By building a robust and transparent supply chain, we aim to empower farmers with better income opportunities while providing industries with a consistent and high-quality biomass supply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id="products" className="w-full py-8 md:py-16 lg:py-24 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="space-y-2">
                    <h2 className="section-heading text-6xl mb-8">
                      Products
                    </h2>
                  </div>
                  <div className="pricing-container w-full">
                    <div className="pricing-scroll">
                      {/* First set of cards */}
                      <Card className="card">
                        <CardHeader>
                          <CardTitle className="text-[#137b58]">Biomass Pellets</CardTitle>
                          <div className="w-32 h-32 mx-auto mt-12 mb-4 rounded-full overflow-hidden">
                            <Image
                              src="/images/Pellets.jpg"
                              alt="Biomass Pellets"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹9,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>High Calorific Value</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Consistent Shape & Size</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Low Ash & Carbon Emissions</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Ideal for Small-Scale Use</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" style={{ backgroundColor: "#137b58" }}>
                            Place an Order
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="card">
                        <CardHeader>
                          <CardTitle className="text-[#137b58]">Briquettes</CardTitle>
                          <div className="w-32 h-32 mx-auto mt-12 mb-4 rounded-full overflow-hidden">
                            <Image
                              src="/images/Briquettes.jpg"
                              alt="Briquettes"
                              width={128}
                              height={128}  
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹9,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Low Moisture Content</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Smokeless & Uniform Burning </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Cost-Effective & Sustainable</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>High Energy Density</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" style={{ backgroundColor: "#137b58" }}>
                            Place an Order
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="card">
                        <CardHeader>
                          <CardTitle className="text-[#137b58]">Baled Biomass</CardTitle>
                          <div className="w-32 h-32 mx-auto mt-12 mb-4 rounded-full overflow-hidden">
                            <Image
                              src="/images/Raw.jpg"
                              alt="Raw Biomass"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹3,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Unprocessed & Natural</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Versatile Applications</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Square bales of 1 cubic meter</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span> Available in Bulk</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" style={{ backgroundColor: "#137b58" }}>
                            Place an Order
                          </Button>
                        </CardFooter>
                      </Card>
                      {/* Duplicate set for seamless scrolling */}
                      <Card className="card">
                        <CardHeader>
                          <CardTitle className="text-[#137b58]">Biomass Pellets</CardTitle>
                          <div className="w-32 h-32 mx-auto mt-12 mb-4 rounded-full overflow-hidden">
                            <Image
                              src="/images/Pellets.jpg"
                              alt="Biomass Pellets"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹9,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>High Calorific Value</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Consistent Shape & Size</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Low Ash & Carbon Emissions</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Ideal for Small-Scale Use</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" style={{ backgroundColor: "#137b58" }}>
                            Place an Order
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="card">
                        <CardHeader>
                          <CardTitle className="text-[#137b58]">Briquettes</CardTitle>
                          <div className="w-32 h-32 mx-auto mt-12 mb-4 rounded-full overflow-hidden">
                            <Image
                              src="/images/Briquettes.jpg"
                              alt="Briquettes"
                              width={128}
                              height={128}  
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹9,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Low Moisture Content</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Smokeless & Uniform Burning </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Cost-Effective & Sustainable</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>High Energy Density</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" style={{ backgroundColor: "#137b58" }}>
                            Place an Order
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="card">
                        <CardHeader>
                          <CardTitle className="text-[#137b58]">Baled Biomass</CardTitle>
                          <div className="w-32 h-32 mx-auto mt-12 mb-4 rounded-full overflow-hidden">
                            <Image
                              src="/images/Raw.jpg"
                              alt="Raw Biomass"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹3,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Unprocessed & Natural</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Versatile Applications</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Sqaure bales of 1 cubic meter</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span> Available in Bulk</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" style={{ backgroundColor: "#137b58" }}>
                            Place an Order
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <h2 className="section-heading text-6xl">
                    Frequently Asked Questions
                  </h2>

                </div>

                <div className="mx-auto max-w-[800px] space-y-6">
                  {/* Question 1 */}
                  <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(0)}
                    >
                      <h3 className="text-xl font-semibold">How do I place an order?</h3>
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${expandedFaqs.includes(0) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {expandedFaqs.includes(0) && (
                      <div className="mt-4 text-gray-600">
                        <p className="text-lg leading-relaxed">
                          You can place an order through our website by clicking on the "Place an Order" button, specifying the type and quantity of biomass required. Our team will then contact you with the best options.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Question 2 */}
                  <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(1)}
                    >
                      <h3 className="text-xl font-semibold">How do you ensure the quality of your biomass products?</h3>
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${expandedFaqs.includes(0) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {expandedFaqs.includes(1) && (
                      <div className="mt-4 text-gray-600">
                        <p className="text-lg leading-relaxed">All our biomass products undergo strict quality checks, including moisture content, calorific value, and impurity tests, to ensure high standards. We integrate processes that allow you to procure from us all round the year!You can place an order through our website by clicking on the "Place an Order" button, specifying the type and quantity of biomass required. Our team will then contact you with the best options.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Question 3 */}
                  <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(2)}
                    >
                      <h3 className="text-xl font-semibold">
                        What is the difference between biomass pellets and briquettes?
                      </h3>
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${expandedFaqs.includes(1) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {expandedFaqs.includes(2) && (
                      <div className="mt-4 text-gray-600">
                        <p className="text-lg leading-relaxed">
                        Consumer wood briquettes are the ideal products for replacing traditional firewood. Since the end of the 90's, the demand for consumer wood briquettes used for home heating systems, fireplaces and wood burning stoves have increased. Driven by the global focus on renewable energy, this demand is still growing. Compared to alternatives, briquettes are both convenient, profitable and sustainable.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Question 4 */}
                  <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(3)}
                    >
                      <h3 className="text-xl font-semibold">How is the biomass delivered?</h3>
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${expandedFaqs.includes(2) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {expandedFaqs.includes(3) && (
                      <div className="mt-4 text-gray-600">
                        <p className="text-lg leading-relaxed">
                        We partner with a reliable logistics network to ensure timely and efficient delivery to your location. Delivery timelines vary based on order size and distance.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="team" className="w-full py-8 md:py-16 lg:py-20 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="section-heading text-6xl">
                      About Us
                    </h2>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    <Card className="card">
                      <CardHeader>
                        <div className="flex flex-col items-center gap-4">
                          <Image
                            src="/images/VJ.jpeg"
                            width={300}
                            height={300}
                            alt="Videh Jha"
                            className="rounded-lg object-cover w-[300px] h-[300px]"
                          />
                          <div className="text-center">
                            <CardTitle className="text-xl text-[#137b58]">Videh Jha</CardTitle>
                            <CardDescription className="text-base">Co-Founder</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">
                          Videh Jha is a sophomore at IIT Kharagpur, pursuing BTech in Mechanical Engineering with a strong interest in consulting, finance, and strategy. He has experience in data analysis, forex trading, and project management, along with leadership roles like Student Guide. A problem-solver with sharp analytical and communication skills, he has competed in case competitions like BCG Insight X and many more.</p>
                      </CardContent>
                      <CardFooter className="flex justify-center gap-4">
                        <Link href="https://www.linkedin.com/in/videhjha/" target="_blank" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Link>
                        <Link href="#" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="card">
                      <CardHeader>
                        <div className="flex flex-col items-center gap-4">
                          <Image
                            src="/images/AM.jpeg"
                            width={300}
                            height={300}
                            alt="Akshat Mittal"
                            className="rounded-lg object-cover w-[300px] h-[300px]"
                          />
                          <div className="text-center">
                            <CardTitle className="text-xl text-[#137b58]">Akshat Mittal</CardTitle>
                            <CardDescription className="text-base">Co-Founder</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">
                          Akshat Mittal is a second-year student pursuing Bachelors in Economics at IIT Kharagpur. He is fervently engaged in entrepreneurship and venture capital. He has worked on market research, case studies and business strategies with startups, and has an active interest in case competitions, winning IIM Indore's Prodylitcs'24 and reaching APAC Finals of 180DC Global Case Challenge
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-center gap-4">
                        <Link href="https://www.linkedin.com/in/akshatmittal05/" target="_blank" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Link>
                        <Link href="#" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="card">
                      <CardHeader>
                        <div className="flex flex-col items-center gap-4">
                          <Image
                            src="/images/MM.jpeg"
                            width={300}
                            height={300}
                            alt="Moulik Mishra"
                            className="rounded-lg object-cover w-[300px] h-[300px]"
                          />
                          <div className="text-center">
                            <CardTitle className="text-xl text-[#137b58]">Moulik Mishra</CardTitle>
                            <CardDescription className="text-base">Co-Founder</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">
                          Moulik Mishra is a second-year student pursuing BTech in Biosciences and Biotechnology at IIT Kharagpur. With a keen interest in strategy, finance, and consulting, he thrives at the intersection of business and technology. As an Executive Head at 180 Degrees Consulting, IIT Kharagpur, he leads a team in solving real-world business challenges.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-center gap-4">
                        <Link href="https://www.linkedin.com/in/moulik-mishra-722120274/" target="_blank" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Link>
                        <Link href="#" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-8 py-12 px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/vikriti-logo.png"
                  alt="Vikriti Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-[#137b58]">Vikriti</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Solving for your biomass-related needs at your fingertips.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-[#137b58]">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Features
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Integrations
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Changelog
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-[#137b58]">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Documentation
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Guides
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Support
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-[#137b58]">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Contact
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#137b58]">
                  Partners
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <h3 className="text-base font-medium text-[#137b58]">Subscribe</h3>
              <p className="text-sm text-muted-foreground">Get the latest updates and offers from Vikriti.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" size="sm" style={{ backgroundColor: "#137b58" }}>
                  <CreditCard className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vikriti. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-[#137b58]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#137b58]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#137b58]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <LoginForm onSuccess={handleLoginSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

