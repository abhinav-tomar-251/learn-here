import { cn } from '@/lib/utils'
import './global.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Navbar from '@/components/Navbar'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn-Here',
  description: 'learning platform created by Abhinav Tomar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        lexend.className, 'antialiased min-h-screen pt-16 bg-slate-200 dark:bg-gray-900 dark:text-white'
      )}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Navbar />  
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
