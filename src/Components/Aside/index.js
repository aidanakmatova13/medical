import React from 'react';
import logo from "../Layout/img/tild3363-3465-4136-b632-623034323164__mimc-logoeng-main-rg.png";
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
            <aside className='aside'>
                <img src={logo} alt="Medical" className='logo'/>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to='/works'>Задачи и работы</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/projects'>Проекты</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/calendar'>Календарь</NavLink></li>
                    <li className="nav-item">
                        <NavLink to='/possibilities'>Возможности</NavLink>
                    </li>
                </ul>
            </aside>
    );
};

export default Aside;