import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

 
// Can be imported from a shared config
const locales = ['en', 'es'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)){
    alert("erroasd")
    notFound();
  } 
 
  return {
    messages: (await import(`../menssages/${locale}.json`)).default
  };
});