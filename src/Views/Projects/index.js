import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css'

const Projects = () => {
    return (
        <>
            <h2 className='title'>ПРОЕКТЫ</h2>
            <ul className='proje-nav'>
                <li className='proje-nav-item'>
                    <NavLink to='/projects/list'>СПИСОК ПРОЕКТОВ</NavLink>
                </li>
                <li className='proje-nav-item'>
                    <NavLink to='/projects/map'>ДОРОЖНЫЕ КАРТЫ</NavLink>
                </li>
            </ul>
            <hr/>
        </>
    );
};

export default Projects;