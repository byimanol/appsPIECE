import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../globals.css";
import pick from 'lodash/pick';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';


interface MetadataParams {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({locale, namespace: 'header'});

  return {
    title: "Apps PIECE",
    keywords: t('keywords'),
    description: t('description'),
  };
}



export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string};
}) {
  
  const t = useTranslations('header');
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className="bg-gray-800 overflow-x-hidden" >
        <header>
          <link rel="shortcut icon" href="/favicon.ico" />
          <script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2588507502767667"
        crossOrigin="anonymous"></script>
          <meta name="google-adsense-account" content="ca-pub-2588507502767667"/>
        </header>
       
        <main>
            <NextIntlClientProvider messages={pick(messages,"header")}>
            <nav><Navbar /></nav>
            </NextIntlClientProvider>
          
          <section>
            <NextIntlClientProvider messages={pick(messages,"wheel","contact")}>
              {children}
            </NextIntlClientProvider>
          </section>
        </main>
        <NextIntlClientProvider messages={pick(messages,"footer")}>
          <footer><Footer /></footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )



}
