import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300"
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
            <div>
              <div className="text-white font-semibold">Founders Gang</div>
              <div className="text-gray-400 text-sm">© 2025 - All rights reserved</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link href="https://www.pinterest.com/foundersgang" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.016 0C5.404 0 .033 5.373.033 11.985c0 4.929 3.188 9.11 7.626 10.606-.105-.9-.199-2.287.041-3.273.219-.891 1.407-5.671 1.407-5.671s-.359-.687-.359-1.699c0-1.593.926-2.782 2.079-2.782.98 0 1.452.735 1.452 1.615 0 .984-.627 2.456-.952 3.821-.271 1.105.566 2.004 1.678 2.004 2.012 0 3.563-2.123 3.563-5.183 0-2.701-1.939-4.594-4.703-4.594-3.201 0-5.082 2.4-5.082 4.876 0 .978.375 2.029.845 2.599.093.113.105.211.08.325-.085.352-.276 1.126-.315 1.28-.05.211-.16.254-.375.155-1.393-.642-2.269-2.678-2.269-4.326 0-3.515 2.555-6.753 7.356-6.753 3.861 0 6.853 2.754 6.853 6.437 0 3.832-2.415 6.912-5.763 6.912-1.121 0-2.175-.58-2.535-1.27l-.691 2.631c-.25.96-.929 2.161-1.384 2.893C9.486 23.734 10.725 24 12.016 24c6.614 0 11.983-5.373 11.983-11.985C24 5.373 18.63 0 12.016 0z" />
              </svg>
            </Link>
            <Link href="https://www.youtube.com/@foundersgang" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/foundersgang/" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
