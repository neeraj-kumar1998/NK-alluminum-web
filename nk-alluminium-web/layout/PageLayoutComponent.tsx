// layout/PageLayoutComponent.tsx
import React from "react"
import { Box, Container, Typography } from "@mui/material"
import { useVariantContext } from "../context/variantContext"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import PageComponent from "../components/page"

interface PageLayoutComponentProps {
  children?: React.ReactNode
  title?: string
  data?: any
}

const PageLayoutComponent: React.FC<PageLayoutComponentProps> = ({
  children,
  title,
  data,
}) => {
  return (
    <Box width="100%">
      <Header />
      <PageComponent />
      <Footer />
    </Box>
  )
}

export default PageLayoutComponent
