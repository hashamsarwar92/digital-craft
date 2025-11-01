import React from 'react'
import MaxWidthWapper from './MaxWidthWapper'
import Link from 'next/link'
import { Icons } from './Icons'

const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 insert-x-0 h-16'>
        <header className='relative bg-white'>
            <MaxWidthWapper>
                <div className='border-b border-gray-200'>
                    <div className='flex h-16 items-center'>
                        {/* Mobile Nav */}
                        <div className='ml-4 flex lg:ml-0'>
                            <Link href='/'>
                            <Icons.logo className='h-10 w-10'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWapper>
        </header>
    </div>
  )
}

export default Navbar