import './style.css'
import {useEffect, useState} from "react";
import axios from "axios";

const ProjectsList = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/projects')
            .then(({data}) => setProjects(data))
    }, [])

    return (
        <>
            <div className='top-content'>
                <h3>СПИСОК ПРОЕКТОВ</h3>
                <button className='btn'>Добавить проект</button>
            </div>
            <div className="row">
                {
                    projects.map(el =>
                        <div className='col-3'>
                            <img src={el.img} alt=""/>
                            <div className='box-content'>
                                <h3>{el.title}</h3>
                                <p>{el.date}</p>
                                <p>{el.name}</p>
                                <p>{el.cash}</p>
                            </div>
                            <div>
                                <img src={el.author1} alt=""/>
                                <img src={el.author2} alt=""/>
                                <img src={el.author3} alt=""/>
                                <img src={el.author4} alt=""/>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default ProjectsList;