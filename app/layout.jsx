import 'styles/global.css'

const RootLayout = ({ children }) => {
  return (
     <html lang='en'>
        <head>
        </head>
       <body>
        {children}
       </body>
     </html>
  )
}

export default RootLayout;