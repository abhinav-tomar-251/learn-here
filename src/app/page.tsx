import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SignIn from '@/components/SignIn';
import Link from 'next/link';

export default function Home() {
  return (  
    <>
      <Link href="https://abhinavtomar.netlify.app/" className="flex items-center gap-2 px-6 text-black sm:flex">
       <Button className="flex rounded-lg border-2 border-b-4 border-r-4 border-black px-5 py-5 text-x1 bg-white font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white mx-auto my-auto sm:justify-between max-w-7xl">
           Developer - Abhinav Tomar
       </Button>
      </Link>
       <div className="flex justify-center items-center pt-6  ">
          <SignIn/>
       </div>
       
     </>
  )
}

