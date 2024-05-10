import React from 'react';

import {useTranslations} from 'next-intl';
export const runtime ="edge";
const TermsPage = () => {
    const t = useTranslations('terms');

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">{t('pageTitle')}</h1>
        
        <h2 className="text-xl font-semibold mb-4">{t('section1Title')}</h2>
        <p className="mb-4">{t('section1Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section2Title')}</h2>
        <p className="mb-4">{t('section2Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section3Title')}</h2>
        <p className="mb-4">{t('section3Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section4Title')}</h2>
        <p className="mb-4">{t('section4Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section5Title')}</h2>
        <p className="mb-4">{t('section5Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section6Title')}</h2>
        <p className="mb-4">{t('section6Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section7Title')}</h2>
        <p className="mb-4">{t('section7Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section8Title')}</h2>
        <p className="mb-4">{t('section8Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section9Title')}</h2>
        <p className="mb-4">{t('section9Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section10Title')}</h2>
        <p className="mb-4">{t('section10Content')}</p>

        <h2 className="text-xl font-semibold mb-4">{t('section11Title')}</h2>
        <p className="mb-4">{t('section11Content')}</p>
    </div>
  );
};

export default TermsPage;
