// slider component

import React from 'react';
import { useTranslation } from 'react-i18next';

function LocationSlide({ data }) {
  const [t] = useTranslation();

  return (
    <div>
      <p className=" max-md:text-lg max-md:text-center sm:text-xl text-base">{data.text}</p>
      <p className="pt-8 max-md:text-center">
        {data.author}
        <br />
        {t('home.location.team')}
      </p>
    </div>
  );
}

export default LocationSlide;
