/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LABif2zwTn4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import UserCard from "./components/UserCard"

export default function Home() {
  return (
    <main className="p-4">
      <h1>User</h1>
      <div className="h-[1400px] bg-red-100 w-10 " />
    </main>
  )
}
