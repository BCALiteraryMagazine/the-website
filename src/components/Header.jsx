import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import pagesData from "../router/pagesData";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>BCA LitMag</h1>
            </Link>
            <nav>
                <ul>
                    {
                        pagesData.map(pData => {
                            return pData.showOnHeader && (
                                <li>
                                    {/* if a specific header title is specified, use that, otherwise use the title */}
                                    <Link to={pData.path}>{pData.headerTitle ?? pData.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;