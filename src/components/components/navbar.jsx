import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="container flex h-16 items-center justify-center px-4 md:px-6">
        <nav className="hidden gap-4 md:flex">
          <Link
            href="/"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-12 font-medium transition-colors hover:bg-gray-900 hover:text-gray-50 focus:bg-gray-900 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 dark:focus:bg-gray-50 dark:focus:text-gray-900"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/login"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-12 font-medium transition-colors hover:bg-gray-900 hover:text-gray-50 focus:bg-gray-900 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 dark:focus:bg-gray-50 dark:focus:text-gray-900"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-12 font-medium transition-colors hover:bg-gray-900 hover:text-gray-50 focus:bg-gray-900 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 dark:focus:bg-gray-50 dark:focus:text-gray-900"
            prefetch={false}
          >
            Signup
          </Link>
          <Link
            href="/team-selection"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-12 font-medium transition-colors hover:bg-gray-900 hover:text-gray-50 focus:bg-gray-900 focus:text-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 dark:focus:bg-gray-50 dark:focus:text-gray-900"
            prefetch={false}
          >
            Team Selection
          </Link>

        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}