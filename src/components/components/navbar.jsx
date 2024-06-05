import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
      <nav className="ml-auto flex gap-8 text-lg font-medium">
        <Link
          href="/"
          className="text-gray-900 hover:underline hover:underline-offset-4 dark:text-gray-50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/login"
          className="text-gray-900 hover:underline hover:underline-offset-4 dark:text-gray-50"
          prefetch={false}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-gray-900 hover:underline hover:underline-offset-4 dark:text-gray-50"
          prefetch={false}
        >
          Signup
        </Link>
        <Link
          href="/team-selection"
          className="text-gray-900 hover:underline hover:underline-offset-4 dark:text-gray-50"
          prefetch={false}
        >
          Team Selection
        </Link>
      </nav>
    </header>
  )
}