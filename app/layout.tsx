import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";

export const metadata = {
  title: 'Apps PICE',
  description: 'Use our online tool, a roulette that picks candidate names randomly, perfect for fair and unbiased selections in any event.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="bg-gray-800 overflow-x-hidden" >
      <header></header>
      <main>
        <nav><Navbar/></nav>
        <section>{children}</section>
        <footer className=""><Footer/></footer>
        </main>
      <footer></footer>
    </body>
    </html>
  )
}
