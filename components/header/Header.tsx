import Navbar from '@/components/header/Navbar'

export function Header() {
  return (
    <header className='w-full border-b bg-background flex fixed align-middle justify-center z-10 py-3'>
      <Navbar />
    </header>
  )
}