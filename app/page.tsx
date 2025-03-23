import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Users,
  MessageSquare,
  ChevronRight,
  Star,
  Sparkles,
  Zap,
  Rocket,
  Shield,
  Clock,
  Lightbulb,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ContactForm } from "@/components/contact-form";
import { AnimatedCounter } from "@/components/animated-counter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-dark-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-dark-100 bg-dark-200/95 backdrop-blur supports-[backdrop-filter]:bg-dark-200/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-2xl bg-blue-500 p-2">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">JJM Solutions</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 rounded-xl">
            Get Started
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden rounded-xl border-dark-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-dark-200 py-20 md:py-32">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl"></div>
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-dark-100 px-4 py-2 text-sm font-medium text-blue-400">
                  <Sparkles className="h-4 w-4" />
                  <span>Digital Innovation Agency</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  We Build <span className="text-blue-400">Digital</span>{" "}
                  Experiences
                </h1>
                <p className="text-lg text-gray-400 max-w-md">
                  Award-winning agency specializing in mobile and web app
                  development that drives business growth and user engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 rounded-xl transform transition-transform hover:scale-105"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500/50 bg-dark-200/80 text-white hover:bg-blue-500 hover:border-blue-500 transition-all rounded-xl hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-none">
                <div className="relative animate-float">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl blur opacity-30"></div>
                  <div className="relative bg-dark-100 rounded-3xl p-1">
                    <Image
                      src="/placeholder.svg?height=600&width=500"
                      alt="App showcase"
                      width={500}
                      height={600}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 rounded-2xl bg-blue-500 p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-white p-1">
                        <Star
                          className="h-4 w-4 text-blue-500"
                          fill="currentColor"
                        />
                      </div>
                      <span className="text-sm font-medium text-white">
                        100+ Successful Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-dark-300">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
                Our Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We offer end-to-end solutions for businesses looking to
                transform their digital presence.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 bg-dark-100 shadow-lg hover:shadow-xl transition-all rounded-2xl group hover:-translate-y-2 duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-6 pt-8">
                  <div className="rounded-xl bg-blue-500/20 p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Smartphone className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">
                    Captivating Mobile Experiences
                  </h3>
                  <p className="text-blue-400 text-sm mb-3">
                    Boost engagement with intuitive, high-performance apps
                  </p>
                  <p className="text-gray-400 mb-4">
                    We craft native and cross-platform mobile applications that
                    delight users and drive measurable business results through
                    seamless UX and cutting-edge technology.
                  </p>
                  <Link
                    href="#"
                    className="group inline-flex items-center text-blue-400 font-medium"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 bg-dark-100 shadow-lg hover:shadow-xl transition-all rounded-2xl group hover:-translate-y-2 duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <CardContent className="p-6 pt-8">
                  <div className="rounded-xl bg-purple-500/20 p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                    <Globe className="h-7 w-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">
                    Scalable Web Solutions
                  </h3>
                  <p className="text-purple-400 text-sm mb-3">
                    Transform ideas into powerful digital platforms
                  </p>
                  <p className="text-gray-400 mb-4">
                    Our web applications combine stunning design with robust
                    architecture, ensuring your digital presence scales with
                    your business while delivering exceptional user experiences.
                  </p>
                  <Link
                    href="#"
                    className="group inline-flex items-center text-purple-400 font-medium"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 bg-dark-100 shadow-lg hover:shadow-xl transition-all rounded-2xl group hover:-translate-y-2 duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <CardContent className="p-6 pt-8">
                  <div className="rounded-xl bg-green-500/20 p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                    <Users className="h-7 w-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">
                    Human-Centered Design
                  </h3>
                  <p className="text-green-400 text-sm mb-3">
                    Create experiences users love to interact with
                  </p>
                  <p className="text-gray-400 mb-4">
                    Our UX/UI design process puts users first, creating
                    intuitive interfaces that balance aesthetic appeal with
                    functional simplicity to increase conversion and retention
                    rates.
                  </p>
                  <Link
                    href="#"
                    className="group inline-flex items-center text-green-400 font-medium"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-20 bg-dark-200 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-dark-100 px-4 py-2 text-sm font-medium text-blue-400 mb-4">
                <Rocket className="h-4 w-4" />
                <span>Our Projects</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Work
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our portfolio of successful projects that have helped
                businesses grow.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="FinTech Mobile App"
                category="Mobile Development"
                image="/placeholder.svg?height=600&width=800"
                link="#"
              />
              <ProjectCard
                title="E-commerce Platform"
                category="Web Development"
                image="/placeholder.svg?height=600&width=800"
                link="#"
              />
              <ProjectCard
                title="Health & Fitness Tracker"
                category="Mobile Development"
                image="/placeholder.svg?height=600&width=800"
                link="#"
              />
              <ProjectCard
                title="Real Estate Dashboard"
                category="Web Development"
                image="/placeholder.svg?height=600&width=800"
                link="#"
              />
              <ProjectCard
                title="Social Media App"
                category="Mobile Development"
                image="/placeholder.svg?height=600&width=800"
                link="#"
              />
              <ProjectCard
                title="Enterprise CRM"
                category="Web Development"
                image="/placeholder.svg?height=600&width=800"
                link="#"
              />
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-blue-500/50 bg-dark-200/80 text-white hover:bg-blue-500 hover:border-blue-500 transition-all rounded-xl hover:scale-105"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-dark-300">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl blur opacity-30"></div>
                <div className="relative bg-dark-100 rounded-3xl p-1">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Our team"
                      width={600}
                      height={600}
                      className="rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Meet Our Team
                      </h3>
                      <p className="text-gray-300">
                        A diverse group of passionate tech enthusiasts
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 blob bg-blue-500 w-24 h-24"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-dark-100 px-4 py-2 text-sm font-medium text-blue-400">
                  <Zap className="h-4 w-4" />
                  <span>About Us</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                  About JJM Solutions
                </h2>
                <p className="text-gray-400">
                  Founded in 2015, JJM Solutions has evolved from a small team
                  of passionate developers into a full-service digital
                  powerhouse. Our journey has been defined by continuous
                  innovation, client success, and technical excellence.
                </p>
                <p className="text-gray-400">
                  Today, our team of 50+ experts across design, development, and
                  strategy work together to create digital products that not
                  only look great but deliver measurable business results.
                </p>

                <div className="bg-dark-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Why Choose JJM Solutions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-blue-500/20 p-1 mt-0.5">
                        <Shield className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Proven Expertise
                        </span>
                        <p className="text-gray-400 text-sm">
                          With 100+ successful projects, we bring deep technical
                          knowledge to every challenge.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-blue-500/20 p-1 mt-0.5">
                        <Clock className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Agile Methodology
                        </span>
                        <p className="text-gray-400 text-sm">
                          Our iterative approach ensures rapid development
                          without sacrificing quality.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-blue-500/20 p-1 mt-0.5">
                        <Lightbulb className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Innovation Focus
                        </span>
                        <p className="text-gray-400 text-sm">
                          We stay ahead of trends to build future-proof
                          solutions for our clients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-dark-100 p-4 rounded-2xl group hover:bg-dark-100/80 transition-all hover:-translate-y-1 duration-300">
                    <div className="text-3xl font-bold text-blue-400 flex items-center">
                      <AnimatedCounter value={100} duration={2000} />{" "}
                      <span>+</span>
                    </div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="bg-dark-100 p-4 rounded-2xl group hover:bg-dark-100/80 transition-all hover:-translate-y-1 duration-300">
                    <div className="text-3xl font-bold text-blue-400 flex items-center">
                      <AnimatedCounter value={50} duration={2000} />{" "}
                      <span>+</span>
                    </div>
                    <div className="text-gray-400">Team Members</div>
                  </div>
                  <div className="bg-dark-100 p-4 rounded-2xl group hover:bg-dark-100/80 transition-all hover:-translate-y-1 duration-300">
                    <div className="text-3xl font-bold text-blue-400">
                      <AnimatedCounter value={12} duration={2000} />
                    </div>
                    <div className="text-gray-400">Industry Awards</div>
                  </div>
                  <div className="bg-dark-100 p-4 rounded-2xl group hover:bg-dark-100/80 transition-all hover:-translate-y-1 duration-300">
                    <div className="text-3xl font-bold text-blue-400 flex items-center">
                      <AnimatedCounter value={98} duration={2000} />{" "}
                      <span>%</span>
                    </div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-dark-200 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-dark-100 px-4 py-2 text-sm font-medium text-blue-400 mb-4 mx-auto">
                <Star className="h-4 w-4" />
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                quote="JJM Solutions transformed our business with an app that our customers love. The team was professional, responsive, and delivered beyond our expectations."
                author="Jessica Miller"
                company="HealthTech Inc."
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Working with JJM Solutions was a game-changer for our startup. They understood our vision and built a platform that has helped us scale rapidly."
                author="David Thompson"
                company="FinEdge"
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The team at JJM Solutions doesn't just build apps, they build relationships. Their strategic approach and technical expertise made all the difference."
                author="Sophia Garcia"
                company="Retail Connect"
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-dark-300">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-dark-100 px-4 py-2 text-sm font-medium text-blue-400">
                  <MessageSquare className="h-4 w-4" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-gray-400">
                  Ready to start your next project? Contact us today for a free
                  consultation and let's discuss how we can help bring your
                  ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-dark-100 p-4 rounded-2xl hover:bg-dark-100/80 transition-all hover:-translate-y-1 duration-300">
                    <div className="rounded-xl bg-blue-500/20 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-400"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 bg-dark-100 p-4 rounded-2xl hover:bg-dark-100/80 transition-all hover:-translate-y-1 duration-300">
                    <div className="rounded-xl bg-blue-500/20 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-400"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">
                      hello@jjmsolutions.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-dark-100 p-4 rounded-2xl hover:bg-dark-100/80 transition-all hover:-translate-y-1 duration-300">
                    <div className="rounded-xl bg-blue-500/20 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-400"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="text-gray-300">
                      123 Tech Street, San Francisco, CA 94107
                    </span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-200 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-xl bg-blue-500 p-2">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">JJM Solutions</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building digital experiences that transform businesses and
                delight users.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors bg-dark-100 p-2 rounded-xl hover:bg-blue-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors bg-dark-100 p-2 rounded-xl hover:bg-blue-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors bg-dark-100 p-2 rounded-xl hover:bg-blue-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors bg-dark-100 p-2 rounded-xl hover:bg-blue-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Web App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    UX/UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Digital Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Maintenance & Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Subscribe
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest news and insights.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-dark-100 text-white px-4 py-2 rounded-xl flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 border-0"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-xl">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-dark-100 mt-12 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} JJM Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
