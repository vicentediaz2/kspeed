import { Rubik } from "next/font/google";
import "./globals.css";
const spaceMono = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: 'Kspeed',
  description: 'Be the fastest typing with AI.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}overflow-x-hidden `}>{children}</body>
    </html>
  )
}
