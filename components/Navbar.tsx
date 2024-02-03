import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/q-sols-logo-full.svg" alt="logo" width={200} height={200} />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger-Menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href="https://q-sols.com"> Home </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href="https://q-sols.com" target='_blank'> About </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href="https://q-sols.com" target='_blank'> Services </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href="https://q-sols.com" target='_blank'> Product </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href="https://q-sols.com" target='_blank'> Blog </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href="https://q-sols.com" target='_blank'> Career </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href="https://q-sols.com" target='_blank'> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar