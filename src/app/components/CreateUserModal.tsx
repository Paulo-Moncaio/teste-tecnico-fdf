'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CreateUserModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Adicionar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-5/6 max-h-[700px]">
        <DialogHeader>
          <DialogTitle>Criar novo usuário</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 p-2 pb-10 overflow-y-scroll scrollbar">
          <label
            className="w-[100px] h-[100px] mx-auto border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer transition-colors hover:brightness-90 dark:border-gray-700 dark:text-gray-400 dark:hover:brightness-110"
            htmlFor="photo"
          >
            <span className="text-center">Adicionar foto</span>
            <input
              accept="image/*"
              className="sr-only"
              id="photo"
              type="file"
            />
          </label>
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Digite o nome" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" placeholder="Digite o endereço" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="Digite o e-mail" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" placeholder="Digite o telefone" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Data de nascimento</Label>
            <Input id="dob" placeholder="Selecione a data" type="date" />
          </div>
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium leading-6">Gênero</legend>
            <div className="flex items-center space-x-4">
              <Label
                className="flex items-center space-x-2 cursor-pointer"
                htmlFor="gender-male"
              >
                <Input
                  id="gender-male"
                  name="gender"
                  type="radio"
                  value="male"
                />
                <span>Homem</span>
              </Label>
              <Label
                className="flex items-center space-x-2 cursor-pointer"
                htmlFor="gender-female"
              >
                <Input
                  id="gender-female"
                  name="gender"
                  type="radio"
                  value="female"
                />
                <span>Mulher</span>
              </Label>
              <Label
                className="flex items-center space-x-2 cursor-pointer"
                htmlFor="gender-other"
              >
                <Input
                  id="gender-other"
                  name="gender"
                  type="radio"
                  value="other"
                />
                <span>Outro</span>
              </Label>
            </div>
          </fieldset>
        </div>
        <DialogFooter className="">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
