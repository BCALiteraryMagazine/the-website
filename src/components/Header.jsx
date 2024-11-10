import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import pagesData from "../router/pagesData";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Header Title</h1>
            </Link>
            <nav>
                <ul>
                    {
                        pagesData.map(pData => {
                            return pData.showOnHeader && (
                                <li>
                                    <Link to={pData.path}>{pData.title}</Link>
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