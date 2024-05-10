


import {useTranslations} from 'next-intl';
import type { Metadata } from 'next'
import styles from './wheel.module.css';
import Wheel from '../../../components/Rulette';


export const metadata: Metadata = {
  title: 'Random Wheel',
  description: 'Random roulette is a versatile and fun tool, ideal for conducting draws in an unbiased and exciting way.',
}
 
export const runtime ="edge";


const wheel = () => {
  const t = useTranslations('wheel');
  metadata.title= t('title');
  metadata.description= t('descrip');
  return (
    <>
      <div className={`relative overflow-x-hidden flex-wrap flex justify-center items-center ${styles.container} `}> 

        <Wheel></Wheel>

        <div className='bg-neutral-50 text-xl p-5 rounded mt-40'>
          <p className='bg-neutral-50'>{t('text')}</p>
        </div>

      </div>
    </>
    
  );
}; 



export default wheel;