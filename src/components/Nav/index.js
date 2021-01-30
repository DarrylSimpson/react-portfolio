import React from 'react';

function Nav() {
    const categories = []





    return (
        <header>
            <h2>
                <a href="/">
                    <span>Darryl Simpson</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About me</a>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );


}


export default Nav;