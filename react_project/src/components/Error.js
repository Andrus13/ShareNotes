import React from "react";
import env from '../env.json';

import { useTranslation } from "react-i18next";

function Error() {
    const { t } = useTranslation();

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="my-4">
                <div class="spinner-border text-dsrk m-4"></div>
            </div>
            <div class="alert alert-warning m-4 text-center w-100"><h4><b>{t("error.info1")}</b></h4><br/><b>#404</b><br/>{t("error.info2")} :(</div>
            <button className='btn btn-dark m-4' onClick={() => window.location.href = env.mainUrl}>{t("error.button")}</button>
        </div>
    );
}

export default Error;
  