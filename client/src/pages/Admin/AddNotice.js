import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddNotice } from '../../redux/action/adminAction'
import AdminNav from '../../components/AdminNav'
import axios from 'axios'
import Sidebar from '../../components/Sidebar'

const AddSubject = () => {

    const store = useSelector((store) => store)
    // const dispatch = useDispatch()
    const history = useNavigate()
    const [topic, setTopic] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('');
    const [type, setType] = useState('')
    const [error, setError] = useState({})
    // const [isLoading, setIsLoading] = useState(false)

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }


    // useEffect(() => {
    //     if (store.error) {
    //         setError(store.error)
    //     }
    // }, [store.error])
    // const formHandler = (e) => {
    //     e.preventDefault()
    //     setIsLoading(true)
    //     dispatch(adminAddNotice({
    //         topic,
    //         content,
    //         type,
    //         image
    //     }))
    // }

    const formHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/admin/addNotice', { topic, content, type, image })
            if (data.success === true) {
                setTopic('');
                setContent('');
                setType('');
                setImage('');
                alert('notice Added')
            }
            console.log(data);
        } catch (error) {
            console.log(error)
        }

    }

    // useEffect(() => {
    //     if (store.admin.adminAddNoticeFlag) {
    //         setError({})
    //     }
    // }, [store.admin.adminAddNoticeFlag])

    // useEffect(() => {
    //     if (store.error || store.admin.adminAddNoticeFlag) {
    //         setIsLoading(false)
    //     }
    // }, [store.error, store.admin.adminAddNoticeFlag])
    return (

        // <div>
        //     {store.admin.isAuthenticated ? <>
        //         <div className='bg-light' style={{ height: '100vh' }}>
        //             <AdminNav />
        //             <div className="container mt-5 border border-rounded p-4 bg-white">
        //                 <h1 className='text-center'>ADMIN ADD NOTICE</h1>
        //                 <div className="row mt-1">
        //                     <div className="col p-2">
        //                         <form noValidate enctype="multipart/form-data" onSubmit={formHandler}>
        //                             <div className="row justify-content-center mt-3">
        //                                 <div className="col-md-6">
        //                                     <div className="form-group mb-3">
        //                                         <label htmlFor="namecId" className='mb-2'>Topic</label>
        //                                         <input onChange={(e) => setTopic(e.target.value)} type="text" className={classnames("form-control",
        //                                             {
        //                                                 'is-invalid': error.topic
        //                                             })} id="namecId" />
        //                                         {error.topic && (<div className="text-danger mt-1 mb-1">{error.topic}</div>)}
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="row justify-content-center mt-2">
        //                                 <div className="col-md-6">
        //                                     <div className="form-group mb-1">
        //                                         <label htmlFor="nameId" className='mb-2'>Notice</label>
        //                                         <textarea onChange={(e) => setContent(e.target.value)} type="text" className={classnames("form-control",
        //                                             {
        //                                                 'is-invalid': error.content
        //                                             })} id="nameId" rows="8" />
        //                                         {error.content && (<div className="text-danger mt-1 mb-1">{error.content}</div>)}
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="row justify-content-center mt-2">
        //                                 <div className="col-md-6">
        //                                     <div className="form-group mb-1">
        //                                         <label htmlFor="nId" className='mb-1'>Notice For</label>
        //                                         <select onChange={(e) => setType(e.target.value)} className={classnames("form-control",
        //                                             {
        //                                                 'is-invalid': error.type
        //                                             })} id="nId">
        //                                             <option>Select</option>
        //                                             <option value="student">Student</option>
        //                                             <option value="faculty">Faculty</option>
        //                                             <option value="student & faculty">Student - Faculty</option>
        //                                         </select>
        //                                         {error.type && (<div className="text-danger mt-1 mb-1">{error.type}</div>)}
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="row justify-content-center mt-2">
        //                                 <div className="col-md-6">
        //                                     <div className="form-group mb-1">
        //                                         <label htmlFor="pdf" className='mb-1'>Any Pdf</label>
        //                                         <input type="file" name="pdf" onChange={handleImage} className='form-control' id='pdf' />
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="row justify-content-center mt-5 mb-3">
        //                                 <button type="submit" className="btn btn-info col-md-2 btnn">Add Notice</button>
        //                             </div>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </> : (history('/'))}
        // </div>

        <div>
            {store.admin.isAuthenticated ? (<>
                <Sidebar />
                <div className='abc bg-light' style={{ height: '100vh' }}>
                <AdminNav />

                    {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 mt-4 text-gray-800"></h1>
                    </div> */}
                    <div className="container mt-3 border border-rounded p-2 bg-white" style={{width: '80%'}}>
                        <h1 className='text-center'>ADMIN ADD NOTICE</h1>
                        <div className="row mt-1">
                            <div className="col p-2">
                                <form encType="multipart/form-data" onSubmit={formHandler}>
                                    <div className="row justify-content-center mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="namecId" className='mb-2'>Topic</label>
                                                <input required onChange={(e) => setTopic(e.target.value)} value={topic} type="text" className="form-control" id="namecId" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mt-2">
                                        <div className="col-md-6">
                                            <div className="form-group mb-1">
                                                <label htmlFor="nameId" className='mb-2'>Notice</label>
                                                <textarea required onChange={(e) => setContent(e.target.value)} value={content} type="text" className="form-control" id="nameId" rows="8" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mt-2">
                                        <div className="col-md-6">
                                            <div className="form-group mb-1">
                                                <label htmlFor="nId" className='mb-1'>Notice For</label>
                                                <select required onChange={(e) => setType(e.target.value)} value={type} className="form-control" id="nId">
                                                    <option>Select</option>
                                                    <option value="student">Student</option>
                                                    <option value="faculty">Faculty</option>
                                                    <option value="student & faculty">Student - Faculty</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mt-2">
                                        <div className="col-md-6">
                                            <div className="form-group mb-1">
                                                <label htmlFor="pdf" className='mb-1'>Any Pdf</label>
                                                <input type="file" name="pdf" onChange={handleImage} className='form-control' id='pdf' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mt-5 mb-3">
                                        <button type="submit" className="btn btn-info col-md-2 btnn">Add Notice</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </>) : history('/')
            }
        </div >

    )
}

export default AddSubject
