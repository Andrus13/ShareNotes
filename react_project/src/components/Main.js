import React from 'react';

import { useTranslation } from "react-i18next";


function Main() {
    const infoBtn1 = React.createRef();
    const infoBtn2 = React.createRef();

    const { t } = useTranslation();

    return (
        <div className="row">
            <div className=" col-12">
                <div className="my-5 py-5">
                    <ul className="row buttons-list">
                        <li className="col-6"><a href="/create" type=" button" className="btn text-light bg-dark d-flex align-items-center justify-content-center">{t("main.button1")}</a></li>
                        <li className="col-6"><a href="/note" type=" button" className="btn text-light bg-dark d-flex align-items-center justify-content-center">{t('main.button2')}</a></li>
                    </ul>
                </div>
                
                <div className="d-flex flex-column p-5">
                    <div className="row">
                        <p><b>ShareNotes</b> - {t("main.definition")}</p>
                    </div>
                    <div className='row flex-lg-row flex-sm-column info'>
                        <div className='container d-flex align-items-center flex-column p-2 col-lg-6 col-sm-12'>
                            <p>{t("main.info1")}<button className='btn' type="button" data-bs-toggle="collapse" data-bs-target="#info1" aria-controls="info1" aria-expanded="false" onClick={() => infoBtn1.current.classList.contains("rotate") ? infoBtn1.current.classList.remove("rotate") : infoBtn1.current.classList.add("rotate")} ref={infoBtn1}><b>?</b></button></p>
                            <ul className='collapse' id="info1">
                                <li>{t("main.info1_1")}</li>
                                <li>{t("main.info1_2")}</li>
                                <li>{t("main.info1_3")}</li>
                            </ul>
                        </div>
                        <div className='container d-flex align-items-center flex-column p-2 col-lg-6 col-sm-12'>
                            <p>{t("main.info2")}<button className='btn' type="button" data-bs-toggle="collapse" data-bs-target="#info2" aria-controls="info2" aria-expanded="false" onClick={() => infoBtn2.current.classList.contains("rotate") ? infoBtn2.current.classList.remove("rotate") : infoBtn2.current.classList.add("rotate")} ref={infoBtn2}><b>?</b></button></p>
                            <p className='collapse' id="info2">{t("main.info2_1")} <a href="/note">{t("main.info2_2")}</a>.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Main;
