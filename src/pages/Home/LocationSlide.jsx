// slider component

import React from 'react';

function LocationSlide({ data }) {
  return (
    <div>
      <p className="text-3xl max-lg:text-lg max-lg:text-center ">{data.text}</p>
      <p className="pt-8 max-lg:text-center">
        {data.author}
        <br /> Refubook Team member
      </p>
    </div>
  );
}

export default LocationSlide;
