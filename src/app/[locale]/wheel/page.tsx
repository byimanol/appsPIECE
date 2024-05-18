


import {useTranslations} from 'next-intl';
import type { Metadata } from 'next'
import styles from './wheel.module.css';
import Wheel from '../../../components/Rulette';


import {getTranslations} from 'next-intl/server';
interface MetadataParams {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({locale, namespace: 'wheel'});

  return {
    title: t('title'),
    description: t('descrip'),
    keywords: t('keywords')
  };
}

export const runtime ="edge";

const wheel = () => {
  const t = useTranslations('wheel');

  return (
    <>
      <div className={`flex-wrap flex justify-center items-center ${styles.container} `}> 

        <Wheel></Wheel>

        <div className='bg-neutral-50 text-xl p-5 rounded mt-40'>
          <p className='text-xl font-semibold mb-4'>{t('sub_text')}</p>
          <p className='bg-neutral-50'>{t('text')}</p>
        </div>

      </div>
    </>
    
  );
}; 



export default wheel;