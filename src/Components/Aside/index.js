import React from 'react';
import logo from "../Layout/img/tild3363-3465-4136-b632-623034323164__mimc-logoeng-main-rg.png";
import {NavLink} from "react-router-dom";


const Aside = () => {
    return (
            <aside className='aside'>
                <div className='aside-content'>
                <img src={logo} alt="Medical" className='logo'/>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to='/works'><i className='bx bx-category-alt'></i>Задачи и работы</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/projects'><i className='bx bx-category-alt'></i>Проекты</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/calendar'><i className='bx bx-category-alt'></i>Календарь</NavLink></li>
                    <li className="nav-item">
                        <NavLink to='/possibilities'><i className='bx bx-category-alt'></i>Возможности</NavLink>
                    </li>
                </ul>
                </div>
            </aside>
    );
};

export default Aside;