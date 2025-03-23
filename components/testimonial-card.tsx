import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  image: string
}

export function TestimonialCard({ quote, author, company, image }: TestimonialCardProps) {
  return (
    <Card className="bg-dark-100 border-0 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
          ))}
        </div>
        <p className="mb-6 text-gray-300">{quote}</p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-blue-500/20 p-0.5">
            <Image src={image || "/placeholder.svg"} alt={author} width={50} height={50} className="rounded-full" />
          </div>
          <div>
            <div className="font-medium text-white">{author}</div>
            <div className="text-sm text-blue-400">{company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

