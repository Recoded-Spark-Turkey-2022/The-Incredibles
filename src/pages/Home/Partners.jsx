import React from 'react';
import Partner from '../../assets/pics/homepage/partner.svg';
import { useTranslation } from 'react-i18next';

function Partners() {
  const [t, i18n] = useTranslation();
  const partners = [
    'recoded',
    'recoded',
    'recoded',
    'recoded',
    'recoded',
    'recoded',
    'recoded',
  ];
  return (
    <div className="pt-8 max-lg:pt-0">
      <h1 className="text-center font-bold text-3xl">{t('home.partner')}</h1>
      <div className="flex justify-center flex-col overflow-hidden px-4">
        <div className="w-full flex justify-center">
          {partners.map((par, index) => (
            <img
              key={index}
              src={Partner}
              alt="partner-logo"
              className="w-24 grow m-10"
            />
          ))}
        </div>
        <div className="w-full hidden max-lg:flex justify-center pb-8">
          {partners.map((par, i) => (
            <button
              key={i}
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              className="rounded-full inline-block p-1 mx-1 border-solid border-2 border-cyan-600 focus:bg-cyan-600"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
