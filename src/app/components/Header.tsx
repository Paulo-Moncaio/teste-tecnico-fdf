'use client'
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, MenuIcon, XIcon } from "lucide-react";
import { Dispatch, SetStateAction, useContext } from "react";
import { SideBarContext } from "../context/sideBarContext";

export default function Header() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext)

  const handleToggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <header className="flex fixed h-14 w-full  items-center transition-all gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 backdrop-blur-md">
      <div className="flex h-14 items-center border-b px-2">
        <Button onClick={handleToggleSidebar} className="h-8 w-8 transition-all" size="icon" variant="ghost">
          {isSideBarOpen ? (
            <XIcon className="h-4 w-4" />
          ) : (
            <MenuIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
      <Button className="rounded-md md:hidden w-8 h-8 dark:bg-gray-950" variant="link">
        <ChevronLeftIcon className="w-4 h-4" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <h1 className="font-semibold text-lg">Users</h1>
      
      <Button className="rounded-full w-8 h-8 " size="icon" variant="ghost">
        <div className="w-8 h-8 rounded-full object-cover bg-gray-300" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </header>
  )
}