import React from 'react';

function Footer() {
    const curDate = new Date().getFullYear();

    return (
        <footer className='font-big navbar-dark bg-dark'>
            <div className="container navbar-nav">
                <div className="text-center py-3">
                    <a className="nav-link" href="https://github.com/Andrus13"> {curDate} ItGid.info</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
