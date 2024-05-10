import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";


export const metadata = {
  title: 'Apps PIECE',
  description: 'Use our online tool, a roulette that picks candidate names randomly, perfect for fair and unbiased selections in any event.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="">
      <body className="bg-gray-800 overflow-x-hidden" >
        <header>
          <link rel="icon" href="/favicon.ico" />
          <script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2588507502767667"
        crossOrigin="anonymous"></script>
          <meta name="google-adsense-account" content="ca-pub-2588507502767667"/>
        </header>
       
        <main>
          <nav><Navbar/></nav>
          <section>
              {children}
          </section>
        </main>
        <footer><Footer/></footer>
      </body>
    </html>
  )
}
