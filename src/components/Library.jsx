import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartList from './CardList';

function Library() {

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

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
  
    let addToCart = (book,i) => {
      setCart([...cart, book]);
      setTotal( total+ 1);
    }
  
    let removeFromCart = (book,i) => {
      let index = cart.findIndex((obj) => obj.id === book.id);
      cart.splice(index, 1);
      setCart([...cart]);
      setTotal(total - 1);
    }

    return (
        <>
        <div className="container">
            {
                isLoading ? (<span> Loading . . .</span>) : (
                    <div className="card shadow mb-4 mt-4">
                        {/* <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-center">Book Data Details</h6>
                        </div> */}
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr className='text-center'>
                                            <th>#S.no</th>
                                            <th>Book Name</th>
                                            <th>Author</th>
                                            <th>Genere</th>
                                            <th>Pages</th>
                                            <th>To Buy</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            books.map((book, index) => {
                                                return <tr className='text-center'>
                                                    <td>{index + 1}</td>
                                                    <td>{book.title}</td>
                                                    <td>{book.author}</td>
                                                    <td>{book.genere}</td>
                                                    <td>{book.pages}</td>
                                                    <td> <button  disabled= { cart.some((obj) => obj.id === book.id)} onClick={() => { addToCart(book) }} className="btn btn-sm" type="button" >Add to Cart </button> </td>
                                                    <td className='text-center'>
                                                        <Link to={`/portal/library/${book.id}`} className='btn btn-sm mr-2'>View</Link> &nbsp;

                                                        <Link to={`/portal/library/edit/${book.id}`} className='btn btn-sm mr-2'>Edit</Link> &nbsp;

                                                        <button onClick={() => {
                                                            bookDelete(book.id)
                                                        }} className='btn btn-sm mr-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                )
            }

        </div>
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Books Cart List </h1>
               
            </div>
            {
                    cart.length === 0 ? <div className="mx-auto"><h5>Cart is Empty</h5></div> :
                      <>
                        <ul className="list-group list-group-numbered  ">
                          {
                            cart.map((cartItem) => {
                              return <CartList
                                cartItem={cartItem}
                                removeFromCart={removeFromCart}>
                              </CartList>
                            })
                          }
                        </ul>
                        
                      </>
                  }
        </div>
            
        </>
    )
}

export default Library;