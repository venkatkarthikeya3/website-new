import Link from "next/link"
import { Github, Mail, Linkedin } from "lucide-react"

import { ProjectCarousel } from "@/components/project-carousel"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Sample project data - replace with your own
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["React Native", "Firebase", "Redux"],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description:
        "An interactive dashboard for healthcare professionals to monitor patient data and schedule appointments.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 4,
      title: "Social Media Analytics Tool",
      description: "A tool for tracking and analyzing social media engagement across multiple platforms.",
      technologies: ["React", "Python", "Django", "Chart.js"],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">My Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:your-email@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">Hi, I'm [Your Name]</h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I'm a passionate web and app developer with expertise in creating responsive, user-friendly applications.
              I specialize in modern JavaScript frameworks, mobile app development, and building scalable backend
              solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="mailto:your-email@example.com">
              <Button>Contact Me</Button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">View Resume</Button>
            </Link>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl pb-4">My Projects</h2>
            <div className="grid gap-8 w-full">
              {projects.map((project) => (
                <div key={project.id} className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <ProjectCarousel images={project.images} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} [Your Name]. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground underline underline-offset-4"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground underline underline-offset-4"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
