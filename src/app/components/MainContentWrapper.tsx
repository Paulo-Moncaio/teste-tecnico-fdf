'use client'
import { useContext } from "react"
import { SideBarContext } from "../context/sideBarContext"

export default function MainContentWrapper({children}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSideBarOpen} = useContext(SideBarContext)
  
  return(
    <div className={`transition-all pt-14 ${isSideBarOpen ? 'ml-40': 'ml-0'}`}>
      {children}
    </div>
  )
}