import { Button } from '@/components/ui/button'
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from '@/components/ui/card'
import { UserIcon, CalendarIcon, MailIcon, PhoneIcon } from 'lucide-react'

export default function UserCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="min-w-10 min-h-10 rounded-full object-cover bg-gray-300" />
          <div className="flex flex-col truncate">
            <CardTitle className="text-base font-medium">Alice Smith</CardTitle>
            <CardDescription className="text-sm truncate">
              alice.smith@example.com
            </CardDescription>
          </div>
        </div>
        <Button className="ml-auto" size="sm">
          Editar perfil
        </Button>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="grid lg:grid-cols-2 gap-2 truncate">
          <p className="flex items-center gap-2 text-sm">
            <UserIcon className="min-h-4 min-w-4 mr-2" />
            User ID:
            <span className="truncate font-semibold">123456</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <CalendarIcon className="min-h-4 min-w-4 mr-2" />
            Joined:
            <span className="truncate font-semibold">2023-01-16</span>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 truncate">
          <p className="flex items-center gap-2 text-sm">
            <MailIcon className="min-h-4 min-w-4  mr-2" />

            {'Email: '}
            <span className="truncate font-semibold">
              alice.smith@example.com
            </span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <PhoneIcon className="min-h-4 min-w-4 mr-2" />
            Phone:
            <span className="truncate font-semibold">+1234567890</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
