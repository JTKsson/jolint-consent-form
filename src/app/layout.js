import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const KumbhSans = Kumbh_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Jolint | Consent Form',
  description: 'Employee Consent Form for Data Processing | Jolint',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={KumbhSans.className}>{children}</body>
    </html>
  )
}
