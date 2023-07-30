import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'


function BooksCorner() {

    const [books, setBooks] = useState([]);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let books = await axios.get("https://64c51cd4c853c26efada82db.mockapi.io/libBooks");
        setBooks(books.data);
        setLoading(false);
    }

    let bookDelete = async (id) => {
        try {
            let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
            if (ask) {
                await axios.delete(`https://64c51cd4c853c26efada82db.mockapi.io/libBooks/${id}`);
            }
            loadData();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="d-sm-flex align-items-center mt-3 justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">BooksCorner</h1>
                    <div className="d-sm-flex align-items-center mt-3 justify-content-between mb-4">
                        <Link to="/portal/add-book" className="d-none d-sm-inline-block btn btn-sm shadow-sm">
                            <FontAwesomeIcon className="fal mx-2 fa-sm text-white-50" icon={faBookBookmark} />
                            Add Book</Link>
                    </div>
                </div>
                {
                    isLoading ? (<span> Loading . . .</span>) : (
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className='container'>
                                    <div className='row'>
                                        {
                                         books.map((book, index) => {
                                            return (
                                                <div className='col-lg-4 mx-auto' key={index}>
                                                    <div className="card mb-3" style={{ width: '18rem' }}>
                                                        <img src={book.image} className="card-img-top offset-6 py-2 mt-3 mx-auto" alt="..." style={{ width: '12rem', height: '15rem' }} />
                                                        <div className="card-body">
                                                            <h5 className="card-title text-center">{book.title}</h5>
                                                        </div>
                                                        <ul className="list-group list-group-flush">
                                                            <div>
                                                                <li className="list-group-item ">Book Id<span className='mx-1'>&nbsp;:&nbsp;</span>{book.id}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Author<span>&nbsp;&nbsp;:&nbsp;</span>{book.author}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Genere<span>&nbsp;:&nbsp;</span>{book.genere}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Pages <span className='mx-1'>&nbsp;:&nbsp;</span>{book.pages}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Available <span className='mx-1'>&nbsp;:&nbsp;</span>Yes</li>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                         )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
    )
}

export default BooksCorner;