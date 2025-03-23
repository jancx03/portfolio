import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link: string
}

export function ProjectCard({ title, category, image, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-2 duration-300">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200/90 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="mb-2 text-sm font-medium text-blue-400">{category}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <Link
          href={link}
          className="mt-4 inline-flex items-center gap-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          View Project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

