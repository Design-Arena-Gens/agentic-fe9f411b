import './globals.css'

export const metadata = {
  title: 'Oakwood Academy - Excellence in Education',
  description: 'A premier institution dedicated to nurturing young minds and fostering academic excellence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
