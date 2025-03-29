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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#home" className="flex items-center gap-2">
              <Image src="/images/vikriti-logo.png" alt="Vikriti Logo" width={48} height={48} className="h-10 w-auto" />
              <span className="text-2xl font-bold text-[#137b58]">Vikriti</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              Features
            </Link>
            <Link href="#products" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              Products
            </Link>
            <Link href="#blog" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              Blog
            </Link>
            <Link href="#about" className="text-base font-medium hover:text-[#137b58] scroll-smooth">
              About Us
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
            <section id = "home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#137b58]">
                        Solving for your biomass-related needs at your fingertips
                      </h1>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        We connect farmers with industries like biofuels, biofertilizers, and biochemicals, ensuring
                        fair pricing, seamless logistics, and sustainable solutions for a greener future.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Button
                        size="lg"
                        className="gap-1"
                        style={{ backgroundColor: "#137b58" }}
                        onClick={handleOrderClick}
                      >
                        Place an Order <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button size="lg" variant="outline" className="border-[#137b58] text-[#137b58]">
                        Learn More
                      </Button>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-[#137b58] text-[#137b58]" />
                      <Star className="h-4 w-4 fill-[#137b58] text-[#137b58]" />
                      <Star className="h-4 w-4 fill-[#137b58] text-[#137b58]" />
                      <Star className="h-4 w-4 fill-[#137b58] text-[#137b58]" />
                      <Star className="h-4 w-4 fill-[#137b58] text-[#137b58]" />
                      <span className="ml-2 text-muted-foreground">Trusted by over 10,000+ farmers worldwide</span>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="Hero Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  />
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="section-heading text-6xl">
                      Features
                    </h2>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#137b58]">
                      Everything you need to succeed
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our platform provides all the tools you need to streamline your workflow, boost productivity, and
                      achieve your goals.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <LineChart className="h-10 w-10 text-[#137b58]" />
                      <CardTitle className="mt-4 text-[#137b58]">Advanced Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Gain valuable insights with our powerful analytics tools. Track performance, identify trends,
                        and make data-driven decisions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <MessageSquare className="h-10 w-10 text-[#137b58]" />
                      <CardTitle className="mt-4 text-[#137b58]">Team Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Work seamlessly with your team. Share files, communicate in real-time, and collaborate on
                        projects from anywhere.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Shield className="h-10 w-10 text-[#137b58]" />
                      <CardTitle className="mt-4 text-[#137b58]">Enterprise Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Keep your data safe with our enterprise-grade security. End-to-end encryption, regular backups,
                        and compliance with industry standards.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="section-heading text-6xl">
                      Testimonials
                    </h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="card">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Avatar"
                            className="rounded-full"
                          />
                          <div>
                            <CardTitle className="text-base text-[#137b58]">Sarah Johnson</CardTitle>
                            <CardDescription>Marketing Director, TechCorp</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "Vikriti has completely transformed how our marketing team operates. The analytics tools are
                          incredible, and the collaboration features have boosted our productivity by 30%."
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="card">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Avatar"
                            className="rounded-full"
                          />
                          <div>
                            <CardTitle className="text-base text-[#137b58]">Michael Chen</CardTitle>
                            <CardDescription>CTO, InnovateCo</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "As a tech company, security is our top priority. Vikriti's enterprise-grade security features
                          give us peace of mind, and the platform's scalability has supported our rapid growth."
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="card">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Avatar"
                            className="rounded-full"
                          />
                          <div>
                            <CardTitle className="text-base text-[#137b58]">Emily Rodriguez</CardTitle>
                            <CardDescription>Founder, StartupX</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          "Vikriti has been a game-changer for our startup. The intuitive interface and comprehensive
                          features have helped us compete with much larger companies in our industry."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id = "products" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="section-heading text-6xl">
                      Products
                    </h2>
                  </div>
                  <div className="pricing-container w-full">
                    <div className="pricing-scroll">
                      {/* First set of cards */}
                      <Card className="card">
                        <CardHeader>
                          <CardTitle className="text-[#137b58]">Biomass Pellets</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹8,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                          <CardDescription>Perfect for small teams and startups</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Up to 5 team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Basic analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>5GB storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Email support</span>
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
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹7,500</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                          <CardDescription>Ideal for growing businesses</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Up to 20 team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Advanced analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>20GB storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Priority support</span>
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
                          <CardTitle className="text-[#137b58]">Raw Biomass</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#137b58]">₹5,000</span>
                            <span className="text-muted-foreground">/ton</span>
                          </div>
                          <CardDescription>For large organizations</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Unlimited team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Custom analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Unlimited storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>24/7 dedicated support</span>
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
                          <CardTitle className="text-[#137b58]">Starter</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-[#137b58]">$29</span>
                            <span className="text-muted-foreground">/month</span>
                          </div>
                          <CardDescription>Perfect for small teams and startups</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Up to 5 team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Basic analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>5GB storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Email support</span>
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
                          <CardTitle className="text-[#137b58]">Professional</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-[#137b58]">$79</span>
                            <span className="text-muted-foreground">/month</span>
                          </div>
                          <CardDescription>Ideal for growing businesses</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Up to 20 team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Advanced analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>20GB storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Priority support</span>
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
                          <CardTitle className="text-[#137b58]">Enterprise</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-[#137b58]">$199</span>
                            <span className="text-muted-foreground">/month</span>
                          </div>
                          <CardDescription>For large organizations</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Unlimited team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Custom analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>Unlimited storage</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-[#137b58]" />
                              <span>24/7 dedicated support</span>
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

            {/* About Section */}
            <section id="about" className="w-full py-8 md:py-16 lg:py-20">
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
                            src="/images/avipriti.jpg"
                            width={200}
                            height={200}
                            alt="Videh Jha"
                            className="rounded-lg object-cover"
                          />
                          <div className="text-center">
                            <CardTitle className="text-xl text-[#137b58]">Videh Jha</CardTitle>
                            <CardDescription className="text-base">Co-Founder</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">
                          Videh Jha is a sophomore at IIT Kharagpur, pursuing a BS in Applied Geology with a strong interest in consulting, finance, and strategy. She has experience in data analysis, forex trading, and project management, along with leadership roles like Student Guide. A problem-solver with sharp analytical and communication skills, she has competed in case competitions like BCG Insight X and Deloitte GCC. She is also a part of the Technology Music Society and is eager to explore opportunities in the consulting space.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-center gap-4">
                        <Link href="https://www.linkedin.com/in/videhjha/" target = "_blank" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </Link>
                        <Link href="#" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="card">
                      <CardHeader>
                        <div className="flex flex-col items-center gap-4">
                          <Image
                            src="/images/rohit.jpg"
                            width={200}
                            height={200}
                            alt="Akshat Mittal"
                            className="rounded-lg object-cover"
                          />
                          <div className="text-center">
                            <CardTitle className="text-xl text-[#137b58]">Akshat Mittal</CardTitle>
                            <CardDescription className="text-base">Co-Founder</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">
                          Akshat Mittal is a second-year student pursuing bachelors at IIT Kharagpur. He is fervently engaged in entrepreneurship and venture capital, serving as Associate Manager in the Entrepreneurship Cell, IIT Kharagpur, where he oversees the portfolios of Competitions & Associations as well as Finance and Logistics. He has been the Secretary for sports in IIT Kharagpur itself marking his skills of leadership.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-center gap-4">
                        <Link href="https://www.linkedin.com/in/akshatmittal05/" target = "_blank" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </Link>
                        <Link href="#" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="card">
                      <CardHeader>
                        <div className="flex flex-col items-center gap-4">
                          <Image
                            src="/images/tuhina.jpg"
                            width={200}
                            height={200}
                            alt="Moulik Mishra"
                            className="rounded-lg object-cover"
                          />
                          <div className="text-center">
                            <CardTitle className="text-xl text-[#137b58]">Moulik Mishra</CardTitle>
                            <CardDescription className="text-base">Co-Founder</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">
                          Moulik Mishra is a second-year student pursuing Exploration Geophysics at IIT Kharagpur. With a keen interest in strategy, finance, and consulting, she thrives at the intersection of business and technology. As a Manager at SHARE IIT Kharagpur, she leads a team in solving real-world business challenges through data-driven insights and analytical problem-solving. Beyond academics, she is passionate about leveraging technology for sustainable and efficient business models.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-center gap-4">
                        <Link href="https://www.linkedin.com/in/moulik-mishra-722120274/" target = "_blank" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </Link>
                        <Link href="#" className="text-[#137b58] hover:text-[#0f5e43]">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section id = "about" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#137b58]">
                      Ready to streamline your workflow?
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Join thousands of satisfied customers and take your business to the next level with Vikriti.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      className="gap-1"
                      style={{ backgroundColor: "#137b58" }}
                      onClick={handleOrderClick}
                    >
                      Place an Order <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-[#137b58] text-[#137b58]">
                      Learn More
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
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

