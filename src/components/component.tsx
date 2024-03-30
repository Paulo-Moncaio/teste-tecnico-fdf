/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3EGTW44DXPD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <div>
      <div>
        <div>Adicionar contato</div>
        <div>Adicione um novo contato à sua lista.</div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label
            className="w-[100px] h-[100px] border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer transition-colors hover:brightness-90 dark:border-gray-700 dark:text-gray-400 dark:hover:brightness-110"
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
          <img
            alt="Photo"
            className="rounded-lg"
            height={100}
            src="/placeholder.svg"
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover',
            }}
            width={100}
          />
        </div>
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
              <Input id="gender-male" name="gender" type="radio" value="male" />
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
      <div>
        <Button variant="outline">Cancelar</Button>
        <Button className="ml-2">Salvar</Button>
      </div>
    </div>
  )
}
