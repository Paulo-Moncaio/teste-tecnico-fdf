'use client'
import { Button } from '@/components/ui/button'
import { MenuIcon, XIcon } from 'lucide-react'
import { useContext } from 'react'
import { SideBarContext } from '../context/sideBarContext'
import HeaderDropdownMenu from './HeaderDropdownMenu'

export default function Header() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext)

  const handleToggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <header className="flex fixed h-14 -mt-14 w-full justify-between items-center transition-all gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 backdrop-blur-md">
      <div className="flex h-14 items-center border-b gap-x-4">
        <Button
          onClick={handleToggleSidebar}
          className="h-8 w-8 transition-all"
          size="icon"
          variant="ghost"
        >
          {isSideBarOpen ? (
            <XIcon className="h-4 w-4" />
          ) : (
            <MenuIcon className="h-4 w-4" />
          )}
        </Button>
        <h1 className="font-semibold text-lg">Wireframe</h1>
      </div>
      <HeaderDropdownMenu />
    </header>
  )
}
