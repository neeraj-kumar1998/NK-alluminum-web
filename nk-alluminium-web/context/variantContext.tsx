// context/VariantContext.tsx
import React, { createContext, useContext } from "react"

interface Variant {
  variant: string
  props: { [key: string]: any } // Adjust types as necessary
}

interface VariantContextType {
  variants: Variant[]
}

const VariantContext = createContext<VariantContextType | undefined>(undefined)

export const useVariantContext = () => {
  const context = useContext(VariantContext)
  if (!context) {
    throw new Error("useVariantContext must be used within a VariantProvider")
  }
  return context
}

export const VariantProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const variantsData = [
    {
      variant: "hero-banner",
      props: {
        title: "Title Media Variant",
        description: "This variant shows a title with media.",
      },
    },

    // Add more variants here as needed
  ]

  return (
    <VariantContext.Provider value={{ variants: variantsData }}>
      {children}
    </VariantContext.Provider>
  )
}
