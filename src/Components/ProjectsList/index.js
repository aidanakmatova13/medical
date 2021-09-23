import './style.css'
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";
import {useForm} from "react-hook-form";

const ProjectsList = () => {
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [grid, setGrid] = useState(true)
    const [columns, setColumns] = useState(false)
    const [image, setImage] = useState({})
    const {handleSubmit, register, reset, required} = useForm()

    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/projects')
            .then(({data}) => {
                    setProjects(data)
                    setIsLoading(false)
                }
            )
    }, [])
    const onsubmit = (data) => {
        data.image = image.url
        axios.post('https://613d36a694dbd600172ab88f.mockapi.io/api/projects', data)
            .then(({data}) => setProjects([...projects, data]))
        setShowModal(false)
        reset()
    }
    const handleChange = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'projects')
        axios.post('https://api.cloudinary.com/v1_1/nevistechcompany/upload', formData)
            .then(({data}) => setImage(data))
    }
    const switchGrid = () => {
        setGrid(true)
        setColumns(false)
    }
    const switchColumns = () => {
        setColumns(true)
        setGrid(false)
    }

    if (isLoading) {
        return <Spinner/>
    }
    return (
        <>
            <div className='top-content'>
                <h3>СПИСОК ПРОЕКТОВ</h3>
                <button onClick={() => setShowModal(true)} className='btn'>Добавить проект</button>
            </div>
            <button onClick={switchGrid} className='switch-btn'><i className='bx bx-table switch'></i></button>
            <button onClick={switchColumns} className='switch-btn'><i className='bx bx-menu switch'></i></button>
            {
                grid &&
                <div className="grid">
                    {
                        projects.map(el =>
                            <div className='box'>
                                <img src={el.image} alt="" className='img'/>
                                <div className='box-content'>
                                    <h2>{el.title}</h2>
                                    <p><i className='bx bx-clipboard'></i>{el.start_date} - {el.end_date}</p>
                                    <p><i className='bx bx-user'></i>{el.author}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
            {
                columns &&
                <>
                    {
                        projects.map(el =>
                            <div className='box'>
                                <img src={el.image} alt="" className='img-columns'/>
                                <div className='box-content'>
                                    <h2>{el.title}</h2>
                                    <p><i className='bx bx-clipboard'></i>{el.start_date} - {el.end_date}</p>
                                    <p><i className='bx bx-user'></i>{el.author}</p>
                                </div>
                            </div>
                        )
                    }
                </>

            }
            {showModal && <div className="modal-window">
                <div className="modal-content">
                    {showModal &&
                    <form onSubmit={handleSubmit(onsubmit)} className='form'>
                        <div className="form-group">
                            <div><label>Добавить фото:</label></div>
                            <div><input name='file' className='form-input' type="file"
                                        {...register('image', {required: true})}
                                        onChange={handleChange}
                            /></div>
                        </div>
                        <div className="form-group">
                            <div><label>Название проекта:</label></div>
                            <div><input name='name' className='form-input' type="text"
                                        placeholder='Название проекта...'
                                        {...register('title', {required: true})}
                            /></div>
                        </div>
                        <div className="form-group">
                            <div><label>Автор проекта:</label></div>
                            <div><input name='author' className='form-input' type="text" placeholder='Имя автора...'
                                        {...register('author', {required: true})}
                            />
                            </div>
                        </div>
                        <div className="form-group">
                            <div><label>Дата начала проекта:</label></div>
                            <div><input name='start_date' className='form-input' type="date"
                                        {...register('start_date', {required: true})}
                            /></div>
                        </div>
                        <div className="form-group">
                            <div><label>Дата конца проекта:</label></div>
                            <div><input name='end_date' className='form-input' type="date"
                                        {...register('end_date', {required: true})}
                            /></div>
                        </div>
                        <button className='btn add-btn' type="submit">Добавить</button>
                    </form>
                    }
                    <button onClick={() => setShowModal(false)} className="close-modal">&#215;</button>
                </div>
            </div>}
        </>
    );
};

export default ProjectsList;