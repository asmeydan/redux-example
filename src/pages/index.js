import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Provider} from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-10 p-24 ${inter.className}`}
    >
      <Link href="/counter" className=' border border-black rounded-3xl px-10 py-4 hover:bg-black hover:text-white'>Counter</Link>
      <Link href="/shopping-list" className=' border border-black rounded-3xl px-10 py-4 hover:bg-black hover:text-white'>Shopping List</Link>
    </main>
  )
}
