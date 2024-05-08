import Link from "next/link"

export const Navbar = () => {
    return(
        <nav className="bg-gray-800 w-full p-4 text-white">
        <ul className="flex justify-center space-x-4">
        <li className="p-2 hover:bg-black">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="p-2 hover:bg-black">
            <Link href="/services">
              Services
            </Link>
          </li>
          <li className="p-2 hover:bg-black">
            <Link href="/about">
              About
            </Link>
          </li>
          <li className="p-2 hover:bg-black">
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
}