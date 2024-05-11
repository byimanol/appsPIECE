


import {useTranslations} from 'next-intl';
import type { Metadata } from 'next'
import styles from './wheel.module.css';
import Wheel from '../../../components/Rulette';


export const metadata: Metadata = {
  title: 'Random Wheel',
  description: 'Random roulette is a versatile and fun tool, ideal for conducting draws in an unbiased and exciting way.',
  keywords: "roulette wheel simulator, random draw tool, decision maker wheel, online roulette game, wheel of fortune, classroom decision wheel",
}
 
export const runtime ="edge";


const wheel = () => {
  const t = useTranslations('wheel');
  metadata.title= t('title');
  metadata.description= t('descrip');
  metadata.keywords= t('keywords');
  return (
    <>
      <div className={`relative overflow-x-hidden flex-wrap flex justify-center items-center ${styles.container} `}> 

        <Wheel></Wheel>

        <div className='bg-neutral-50 text-xl p-5 rounded mt-40'>
          <h1 className='m-10 text-3xl font-bold '>{t('title')}</h1>
          <p className='bg-neutral-50'>{t('text')}</p>
        </div>

      </div>
    </>
    
  );
}; 



export default wheel;