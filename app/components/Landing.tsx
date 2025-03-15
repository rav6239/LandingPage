import React from 'react'
import { Instagram, Mail, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  // Replace with your WhatsApp number
  const whatsappLink = "https://wa.me/+917696484551"

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-05%20at%207.06.35%20PM-lGLTKlVG62oyFVyFY6ZlDmcUoZIrF5.jpeg"
        alt="Rocket launch background"
        fill
        className="object-cover"
        priority
      />

      {/* Glass Card */}
      <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden backdrop-blur-md bg-black/30 p-8 flex flex-col items-center gap-6 shadow-2xl">
        {/* Logo */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 border-4 border-white/10 flex items-center justify-center">
          <Image
            src="/assets/profile.png"
            alt="Crypto Elite Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-white">Crypto Elite</h1>
          <p className="text-gray-100 text-sm max-w-[250px] mx-auto">
            A platform where you'll find all markets at one place with minimum spreads and low brokerage
          </p>
        </div>

        {/* WhatsApp Button */}
        <Link
          href={whatsappLink}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-medium transition-colors"
        >
          whatsapp us!
        </Link>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          <Link href="https://www.instagram.com/cryptoelite.fr/profilecard/?igsh=MW4zdng1a2k3d3kxeg==" className="text-white/90 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="mailto:ssupport@cryptoelites.in" className="text-white/90 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </Link>
          <Link href="https://t.me/GAMER4EVER8" className="text-white/90 hover:text-white transition-colors">
            <Send className="w-6 h-6" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

