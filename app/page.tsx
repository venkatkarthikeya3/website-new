import Link from "next/link"
import { useState, useEffect } from "react";

import { Github, Mail, Linkedin } from "lucide-react"

import { ProjectCarousel } from "@/components/project-carousel"
import { Button } from "@/components/ui/button"
import { Description } from "@radix-ui/react-toast"
import 'react-photo-view/dist/react-photo-view.css';

export default function Home() {
  

  // Sample project data - replace with your own
  const projects = [
    {
      id: 6,
      title: "PromSocial",
      description:
        "A social networking app for prom-going students to connect and share their experiences and purchase prom-related products.",
      technologies: [
        "Ionic",
        "Angular",
        "Laravel",
        "MySQL",
        "Firebase",
        "iOS",
        "Android",
      ],
      images: [
        { src: "/promapp17.png", description: "Landing page" },
        { src: "/app1.png", description: "News Feed" },
        { src: "/app3.png", description: "News Feed 2" },
        { src: "/promapp1.png", description: "Prom Organize Page" },
        { src: "/app13.png", description: "Tinder Style Find Date." },
        { src: "/app14.png", description: "Promposal" },
        { src: "/app15.png", description: "Limo Party" },
        { src: "/app17.png", description: "Group Chats" },
        { src: "/app18.png", description: "OutFits" },
        { src: "/app19.png", description: "Voting" },
        { src: "/app12.png", description: "News Article" },
        { src: "/app11.png", description: "Market Directory Search" },
        { src: "/app20.png", description: "Photos" },
        { src: "/app21.png", description: "Prombook" },
        { src: "/app4.png", description: "Share Page" },
        { src: "/app5.png", description: "News Article Post" },
        { src: "/app6.png", description: "Share to Friends" },
        { src: "/app8.png", description: "Messages" },
        { src: "/app9.png", description: "User Saved Content" },
        { src: "/promapp4.png", description: "Map view" },
        { src: "/promapp5.png", description: "Store view" },
        { src: "/promapp6.png", description: "Store" },
        { src: "/promapp7.png", description: "Store reviews and comments" },
      ],
    },
    {
      id: 7,
      title: "PromSocial Website",
      description:
        "A website to promote the PromSocial app and provide information about its features and benefits. Also includes onboarding of stores and their merchandise.",
      technologies: ["Angular", "Stripe", "Laravel"],
      images: [
        { src: "/web1.png", description: "Landing page" },
        { src: "/web2.png", description: "Landing page 2" },
        { src: "/web3.png", description: "Stores" },
        { src: "/web4.png", description: "Store onboarding" },
        { src: "/web6.png", description: "Landing page 3" },
        { src: "/web8.png", description: "Footer" },
      ],
    },
    {
      id: 1,
      title: "Snail Runner",
      description:
        "A 2d mobile game where players control a snail to navigate through a maze of pipes.",
      technologies: ["Cocos-2d js", "iOS", "Android"],
      images: [
      
        { src: "/snail2.jpeg", description: "Snails store" },
        { src: "/snail3.jpeg", description: "Snail Purchase" },
        { src: "/snail4.png", description: "Snail Gameplay" },
        { src: "/snail5.png", description: "Snail Gameplay" },
        { src: "/snail6.png", description: "Snail Gameplay" },
        { src: "/snail7.jpeg", description: "Snails store" },
        { src: "/snail8.png", description: "Gameover screen" },
        { src: "/snail1.JPEG", description: "No internet connection." },
      ],
    },
    {
      id: 5,
      title: "Sales Tracker App",
      description:
        "An app for members of the Group Purchasing Organization to track their sales.",
      technologies: ["React", "Next.js", "Shadcn"],
      images: [
        { src: "/salestracker1.png", description: "Sales Dashboard" },
        { src: "/salestracker2.png", description: "Changes in metric shown as graph" },
        { src: "/salestracker3.png", description: "Changes in metric shown as graph" },
        { src: "/salestracker4.png", description: "Updating each single metric with date." },
        { src: "/salestracker5.png", description: "Exporting metric data" },
      ],
    },
    {
      id: 2,
      title: "MRS Interactive Interview",
      description:
        "A responsive web application for managing underwriting of insurance cases.",
      technologies: ["Angular", "Socket IO", "RxJs"],
      images: [
        { src: "/mrs1.png", description: "Interview Page" },
        { src: "/mrs2.jpg", description: "Client account configuration" },
        { src: "/mrs3.jpg", description: "Clients" },
      ],
    },
    {
      id: 3,
      title: "Agent and Customer App",
      description:
        "An app for agents on the field to manage their insurance cases.",
      technologies: ["React Native", "iOS"],
      images: [
        { src: "/agent app.jpg", description: "Dashboard for Agents." },
      ],
    },
    {
      id: 4,
      title: "Time Tracker App",
      description:
        "An app for logging time spent on different tasks and projects.",
      technologies: ["Ionic", "Angular", ".Net", "iOS", "Android"],
      images: [
        { src: "/timetracker4.jpg", description: "Tasks List" },
        { src: "/timetracker7.png", description: "Time Tracker Dashboard" },
        { src: "/timetracker2.jpg", description: "Adding Tasks" },
        { src: "/timetracker3.jpg", description: "Adding time for tasks" },
      
        { src: "/timetracker5.png", description: "Tasks list 2" },
        { src: "/timetracker6.png", description: "Calender view" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex flex-col items-start">
              <span className="inline-block font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Venkata Karthikeya
              </span>
              <span className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Web & App Developer
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="https://github.com/venkatkarthikeya3" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/venkatkarthikeya/" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:venkatkarthikeya3@gmail.com">
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
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Hi there, I am Karthikeya
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I'm a passionate developer who loves crafting web and mobile applications that solve real-world problems. 
              With 9+ years of experience, I've worked on everything from social networking platforms to e-commerce solutions. 
              Let's build something amazing together!
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="mailto:venkatkarthikeya3@gmail.com">
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
            © {new Date().getFullYear()} Venkata Karthikeya. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/venkatkarthikeya3"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground underline underline-offset-4"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/venkatkarthikeya/"
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
  );
}
