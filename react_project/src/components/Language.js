import React from "react";

import { useTranslation } from "react-i18next";

function Language() {
    const { t, i18n } = useTranslation();
    const locales = {
        en: {title: 'English'},
        ru: {title: 'Русский'},
    }

    return (
        <div className="d-flex flex-column lng">
            <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#language" aria-controls="language" aria-expanded="false">{t("language")}</button>
            <ul className='collapse text-center p-0 pt-1 m-0' id="language">
                {Object.keys(locales).map(locale => <li key={locale}><button className="btn text-light bg-dark" type="submit" onClick={() => i18n.changeLanguage(locale)}>
                    {locales[locale].title}
                </button></li>)}
            </ul>
        </div>
    );
}           

export default Language;
