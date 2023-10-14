import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css';

function Navbar() {
    return (
        <>
        <nav className={`${style.nav}`}>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/equiments">Оборудование</Link>
                </li>
                <li>
                    <Link to="/muscle_group">Группы мышц</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;