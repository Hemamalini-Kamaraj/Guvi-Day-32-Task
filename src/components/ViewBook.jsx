import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewBook() {
    const params = useParams();
    
    const [bookData, setBookData] = useState({})
    useEffect(() => {
        async function fetchData() {
        try {
            let book = await axios.get(`https://64c51cd4c853c26efada82db.mockapi.io/libBooks/${params.id}`)
            setBookData(book.data)
        } catch (error) {
            console.log(error)
        }
        }
        fetchData()
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bookData.image} className="card-img-top offset-6 py-2 mt-3 mx-auto " alt="..." style={{  width: '12rem', height: '15rem' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{bookData.title}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <div>
                                    <li className="list-group-item ">Book Id<span className='mx-1'>&nbsp;:&nbsp;</span>{bookData.id}</li>
                                </div>
                                <div>
                                   <li className="list-group-item">Author<span>&nbsp;&nbsp;:&nbsp;</span>{bookData.author}</li>
                                </div>
                                <div>
                                    <li className="list-group-item">Genere<span>&nbsp;:&nbsp;</span>{bookData.genere}</li>
                                </div>
                                <div>
                                    <li className="list-group-item">Pages <span className='mx-1'>&nbsp;:&nbsp;</span>{bookData.pages}</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBook;