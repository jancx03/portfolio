"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <Card className="border-0 bg-dark-100 shadow-xl rounded-2xl overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-dark-200 border-dark-100 rounded-xl focus:border-blue-500 text-white transition-all focus:scale-[1.01]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-dark-200 border-dark-100 rounded-xl focus:border-blue-500 text-white transition-all focus:scale-[1.01]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-white">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-dark-200 border-dark-100 rounded-xl focus:border-blue-500 text-white transition-all focus:scale-[1.01]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-dark-200 border-dark-100 rounded-xl focus:border-blue-500 text-white transition-all focus:scale-[1.01]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl transition-all hover:scale-[1.02]"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

