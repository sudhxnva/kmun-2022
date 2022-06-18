import React from "react"
import { MenuProvider } from "./src/components/MenuContext"
import { AnimatePresence } from "framer-motion"
import "@fontsource/montserrat/900.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/700.css"

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>
}
