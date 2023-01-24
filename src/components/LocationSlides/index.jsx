// slider component

import React from 'react';
import { useTranslation } from 'react-i18next';

function LocationSlide({ data }) {
  const [t, i18n] = useTranslation();

  return (
    <div>
      <p className="text-2xl max-lg:text-lg max-lg:text-center ">{data.text}</p>
      <p className="pt-8 max-lg:text-center">
        {data.author}
        <br />
        {t('home.location.team')}
      </p>
    </div>
  );
}

export default LocationSlide;
