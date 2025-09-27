"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AgriculturalLoaderOverlay } from "@/components/ui/agricultural-loader"

interface LoadingContextType {
  isLoading: boolean
  loadingMessage: string
  startLoading: (message?: string) => void
  stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState("Loading...")

  const startLoading = (message = "Loading...") => {
    setLoadingMessage(message)
    setIsLoading(true)
  }

  const stopLoading = () => {
    setIsLoading(false)
  }

  // Loading is now disabled to avoid hydration issues
  // The loader system is kept for potential future use but not actively used

  return (
    <LoadingContext.Provider value={{ isLoading, loadingMessage, startLoading, stopLoading }}>
      {children}
      {isLoading && <AgriculturalLoaderOverlay message={loadingMessage} />}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}