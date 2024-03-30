import UserCard from './components/UserCard'
import { CreateUserModal } from './components/CreateUserModal'

export default function Home() {
  return (
    <main className="p-4 px-2 sm:px-4">
      <div className="flex items-center justify-between">
        <h2>Usuários</h2>
        <CreateUserModal />
      </div>
      <section className="mt-4">
        <div className="bg-gray-200 p-4 rounded-t-md">
          <h3>Seção</h3>
        </div>
        <div className="bg-gray-100 p-4 grid md:grid-cols-2 gap-4 rounded-b-md">
          <UserCard />
          <UserCard />
        </div>
      </section>
    </main>
  )
}
