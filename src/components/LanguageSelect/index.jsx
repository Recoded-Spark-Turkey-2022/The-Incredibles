import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

function LanguageSelect() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState({ lang: 'en', dir: 'ltr' });
  const handleChange = (event) => {
    const selected = event.target.value;
    if (selected === 'ar') {
      setLang({ lang: 'ar', dir: 'rtl' });
    } else {
      setLang({ lang: 'en', dir: 'ltr' });
    }

    i18n.changeLanguage(selected);
  };

  return (
    <div className="">
      <label>
        <select
          onChange={handleChange}
          className="flex items-center justify-between font-medium border border-cyan-600 rounded-full px-7 py-2 cursor-pointer"
        >
          <option value="en" className="cursor-pointer">
            English
          </option>
          <option value="tr" className="cursor-pointer">
            Türkçe
          </option>
          <option value="ar" className="cursor-pointer">
            العربية
          </option>
        </select>
      </label>
      <Helmet>
        <html lang={lang.lang} dir={lang.dir} />
      </Helmet>
    </div>
  );
}

export default LanguageSelect;
