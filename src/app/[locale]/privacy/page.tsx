import React from 'react';
import {useTranslations} from 'next-intl';
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Privacy Policy for AppsPiece.com',
  description: 'Welcome to AppsPiece.com. At AppsPiece.com, we deeply value the privacy and security of our users.',
}
 

export const runtime ="edge";


const PrivacyPage = () => {

  const t = useTranslations('privacy');

  metadata.title= t('pageTitle');
  metadata.description= t('intro');
  
  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">{t('pageTitle')}</h1>
        <p className="mb-4">{t('effectiveDate')}</p>

        <p className="mb-4">{t('intro')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('informationCollectionTitle')}</h2>
        <h3>{t('informationCollectionSubtitle')}</h3>
        <p className="mb-4 list-disc list-inside">{t('informationCollectionContent')}</p>

        <h2 className="text-xl font-semibold mb-4">  {t('usageDataAndCookiesTitle')}</h2>
        <h3>{t('usageDataAndCookiesSubtitle')}</h3>
        <p className="mb-4 list-disc list-inside">{t('usageDataAndCookiesContent')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('useOfInformationTitle')}</h2>
        <p className="mb-4">{t('useOfInformationContent')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('informationSharingTitle')}</h2>
        <p className="mb-4">{t('informationSharingContent')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('policyChangesTitle')}</h2>
        <p className="mb-4">{t('policyChangesContent')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('acceptanceTitle')}</h2>
        <p className="mb-4">{t('acceptanceContent')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('contactTitle')}</h2>
        <p className="mb-4">{t('contactContent')}</p>

        <p className="mb-4">{t('farewell')}</p>
    </div>
  );
};

export default PrivacyPage;
