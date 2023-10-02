import React from 'react'
import { ModeToggle } from './ui/mode-toggle';
import Link from 'next/link';
import SignIn from './SignIn';


type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed inset-x-0 top-0 bg-gray-200 dark:bg-gray-950 z-[10] h-fit border-b border-zinc-400 py-2">
        <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
               <Link href='/gallery' className="items-center gap-2 sm:flex">
                    <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-x1 font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                        Learn-Here
                    </p>
               </Link>
            <div className='flex items-center'>
                <Link href='/create' className='mr-3'>
                    Create Course
                </Link>
                <Link href='/settings' className='mr-3'>
                    Settings
                </Link>
            </div>    
        <div className="justify-end pr-6"><ModeToggle /></div>
        </div>
    </nav>
  )
};

export default Navbar;