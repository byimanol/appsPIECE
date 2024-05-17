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
    title: t('defaul_title'),
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

          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
          <link rel="manifest" href="favicon/site.webmanifest"/>
          <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="shortcut icon" href="favicon/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="msapplication-config" content="favicon/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>

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
