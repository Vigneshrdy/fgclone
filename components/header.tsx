import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">Founders Gang</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/videos" className="text-gray-700 hover:text-gray-900 font-medium">
              Videos
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-gray-900 font-medium">
              Tools
            </Link>
            <a
              href="https://startup.foundersgang.com/companies"
              className="text-gray-700 hover:text-gray-900 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Startups
            </a>
            <a
              href="https://startup.foundersgang.com/founders"
              className="text-gray-700 hover:text-gray-900 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founders
            </a>
          </nav>

          {/* Get Started Button */}
          <div className="flex items-center">
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
