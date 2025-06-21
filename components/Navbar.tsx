import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navitems from './Navitems'
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
        <div className="flex items-center gap 2.5 cursor-pointer">
            <Image src="/images/logo.svg" alt="logo" width={46} height={44} />

        </div>
          
        </Link>
        <div className="flex items-center gap-8">
            <Navitems/>
           <SignedOut>
            
              <SignInButton>
                <button className="btn-signin">
                  Sign In
                </button>
              </SignInButton>

           
           </SignedOut>
           <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton/>
              <SignOutButton>
                <button className="btn-signin">
                  <Image src="/icons/logout.svg" alt="logout" width={16} height={16} />
                  Sign Out
                </button>
              </SignOutButton>
            </div>
           </SignedIn>

        </div>

    </nav>
  )
}

export default Navbar
