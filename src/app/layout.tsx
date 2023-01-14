import Navbar from '@/components/Navbar'
// import './globals.css'

import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
// <link rel="icon" href="images/fevicon.png" type="image/gif" />
import '../assets/css/jquery.mCustomScrollbar.min.css'
//https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" /> 
      // <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
      // <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      // <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Poppins:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
import '../assets/css/owl.carousel.min.css'
import '../assets/css/owl.theme.default.min.css'
 // https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />

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
        {/* <!-- copyright section end -->
        <!-- Javascript files--> */}
        {/* <script src="js/jquery.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-3.0.0.min.js"></script>
        <script src="js/plugin.js"></script>
        {/* <!-- sidebar --> */}
        {/* <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="js/custom.js"></script>  */}
        {/* <script>
          function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
         }

          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
         }
        </script> */}
      </body>
    </html>
  )
}
