"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <a
          href="https://wa.me/447877417446"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
      </Button>
    </div>
  )
}
