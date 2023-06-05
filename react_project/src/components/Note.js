import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import env from '../env.json';

import { useTranslation } from "react-i18next";

function Note() {
    let { noteURL } = useParams();
    const [ useNoteText, setNoteText ] = useState('');
    const [ useLineClass, setLineClass ] = useState('hide');
    const [ useFormClass, setFormClass ] = useState('hide');
    const [ useErrorClass, setErrorClass ] = useState('hide');
    const [ useErrorClass2, setErrorClass2 ] = useState('hide');

    const { t } = useTranslation();

    useEffect(() => {
        if ( noteURL !== undefined ) {
            fetch(env.urlBackend, {
                method : "POST",
                headers : {
                "Content-Type" : "application/x-www-form-urlencoded",
                },
                body : JSON.stringify({ "url" : noteURL }),
            })
                .then( response => response.json() )
                .then( response => {
                console.log(response);
                if ( response.result ) {
                    setNoteText(response.note);
                    setLineClass('');
                    setFormClass('hide');
                    setErrorClass('hide');
                }else if (!response.result) {
                    setLineClass('hide');
                    setFormClass('hide');
                    setErrorClass('');
                }
                })
        }else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();

        if ( url === '' ) {
            setErrorClass2('');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    function searchNote() {
        window.location.href = env.url;
    }

    return (
        <div className='row'>
            <div className='col-12'>
                <div className={useFormClass}>
                    <form action="" className='m-4' onSubmit={getNote}>
                        <label htmlFor="url">{t("note.label")}</label>
                        <input type="text" name="url" id="url" className='form-control my-2'/>
                        <div className={useErrorClass2}>
                            <div className='alert alert-danger' role='alert'>{t("note.error1")}</div>
                        </div>
                        <button type='submit' className='btn btn-dark my-4'>{t("note.button1")}</button>
                    </form>
                </div>
                <div className={useLineClass}>
                    <div className="alert alert-success m-4" role="alert">
                        <h4 className="alert-heading">Note: {noteURL}</h4>
                        <div>{useNoteText}</div>
                        <hr />
                        <p className="mb-0">{t("note.info1")}</p>
                    </div>
                    <button className='btn btn-dark mx-4' onClick={searchNote}>{t("note.button2")}</button>
                </div> 
                <div className={useErrorClass}>
                    <div className='alert alert-danger m-4' role='alert'>{t("note.error2")}</div>
                    <button className='btn btn-dark mx-4' onClick={searchNote}>{t("note.button2")}</button>    
                </div>
            </div>
        </div>
    );
}

export default Note;
  