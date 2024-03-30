import { Button } from '@/components/ui/button'
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from '@/components/ui/card'
import {
  UserIcon,
  CalendarIcon,
  PhoneIcon,
  MapPinnedIcon,
  ListChecksIcon,
  CalendarClockIcon,
} from 'lucide-react'

export default function UserCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="min-w-10 min-h-10 rounded-full object-cover bg-gray-300" />
          <div className="flex flex-col truncate">
            <CardTitle className="text-base font-medium">
              Paulo Moncaio
            </CardTitle>
            <CardDescription className="text-sm truncate">
              paulo.moncaio@gmail.com
            </CardDescription>
          </div>
        </div>
        <Button className="ml-auto" size="sm">
          Visualizar cadastro
        </Button>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="grid lg:grid-cols-2 gap-2 truncate">
          <p className="flex items-center gap-2 text-sm">
            <UserIcon className="min-h-4 min-w-4 mr-2" />
            CPF:
            <span className="truncate font-semibold">123.456.789-00</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <CalendarIcon className="min-h-4 min-w-4 mr-2" />
            Nascimento:
            <span className="truncate font-semibold">19-04-1999</span>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 truncate">
          <p className="flex items-center gap-2 text-sm">
            <CalendarClockIcon className="min-h-4 min-w-4  mr-2" />
            Idade:
            <span className="truncate font-semibold">24</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <PhoneIcon className="min-h-4 min-w-4 mr-2" />
            Telefone:
            <span className="truncate font-semibold">+5511959367382</span>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 truncate">
          <p className="flex items-center gap-2 text-sm">
            <MapPinnedIcon className="min-h-4 min-w-4  mr-2" />
            Endereço:
            <span className="truncate font-semibold">Rua do futebol, 123</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <ListChecksIcon className="min-h-4 min-w-4 mr-2" />
            Status:
            <span className="truncate font-semibold">Ativo</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
