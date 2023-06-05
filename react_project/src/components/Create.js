import React, { useState } from 'react';
import env from '../env.json';

import { useTranslation } from "react-i18next";

function Create() {
    const [ useUrl, setUrl ] = useState('');
    const [ useLineClass, setLineClass ] = useState('hide');
    const [ useFormClass, setFormClass ] = useState('');
    const [ useErrorClass, setErrorClass ] = useState('hide');
    const [ useCopy, setCopy ] = useState('Copy the URL.');

    const { t } = useTranslation();

    function sendData(obj) {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
        method : "POST",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded",
        },
        body : JSON.stringify(obj),
        })
        .then( response => response.json() )
        .then( response => {
            console.log(response);
            if ( response.result ) {
            setUrl(env.url + "/" + response.url);
            }
        })
    }

    function loadDataFromForm(event) {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        
        if ( note === '' ) {
            setErrorClass('');
            return false;
        }
        sendData({ 'note' : note });
    }

    function copyUrl() {
        navigator.clipboard.writeText(useUrl);
        setCopy('URL copied to clipboard.');
        setTimeout(() => {
            setCopy('Copy the URL.');
        }, 1500);
    }

    return (
        <div className='row'>
            <div className='col-12'>
                <div className={useFormClass} >
                    <form onSubmit={loadDataFromForm} className='m-4'>
                        <label htmlFor='note'>{t("create.label")}</label>
                        <textarea name='note' id='note' className='form-control my-2' defaultValue='Your message' maxLength='1000'></textarea>
                        <div className={useErrorClass}>
                            <div className='alert alert-danger' role='alert'>{t("create.error")}</div>
                        </div>
                        <p><b>{t("create.info1")}</b> {t("create.info1_1")}</p>
                        <button type='submit' className='btn btn-dark my-4'>{t("create.button1")}</button>
                    </form>
                </div>
                <div className={useLineClass}>
                    <div className='alert alert-success m-4'>
                        {useUrl}
                        <hr/>
                        <button className='btn m-0 p-0' onClick={copyUrl} title='Copy URL'>{useCopy}</button>
                    </div>
                    <div className='alert alert-info m-4'>{t("create.info3")}</div>
                    <button className='btn btn-dark m-4' onClick={() => window.location.reload()}>{t("create.button2")}</button>
                </div>
            </div>
        </div>
    );
}

export default Create;
  