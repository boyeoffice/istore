import Navbar from '@/components/navbar/Navbar'
import './globals.css'
// import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <Navbar /> */}
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
