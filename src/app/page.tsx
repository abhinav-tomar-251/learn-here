import React from 'react';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Home() {
  return (  
    <>
      <div className="flex justify-end pr-6"><ModeToggle /></div>
    </>
  )
}

