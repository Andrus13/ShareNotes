import React from "react";
import { NavLink } from "react-router-dom";

import Language from "./Language";

import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand " href="/">ShareNotes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center me-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/">{t("nav.home")}</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/note">{t("nav.note")}</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/create">{t("nav.create")}</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">{t("nav.about")}</NavLink></li>
                    </ul>
                    <Language/>
                </div>
            </div>
        </nav>
    );
}           

export default Footer;
