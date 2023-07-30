import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function AddBook() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genere: "",
      pages: ""
    },
    
    validate: (values) => {
      let errors = {};
      if (values.title === "") {
        errors.title = "Please enter Title of the book "
      }
      if (values.author === "") {
        errors.author = "Please enter author name"
      }
      if (values.genere === "") {
        errors.price = "Please enter genere"
      }
      if (values.pages === "") {
        errors.quantity = "Please enter no.of pages"
      }
      return errors;
    },

    onSubmit: async (values) => {
      await axios.post("https://64c51cd4c853c26efada82db.mockapi.io/libBooks", values);
      alert("Book Added");
      navigate('/portal/library');
    }


  })
  return (
    <>
      <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-center mt-3 mb-4">
          <h1 className="h3 mb-0 text-dark-800">  Book Adding Form</h1>
        </div>
        
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-10 mx-auto'>
              <label>Book Name</label>
              <input
                className={`form-control ${formik.errors.title ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.title}
                onChange={formik.handleChange}
                name="title"
              />
              <span style={{ color: "red" }}>{formik.errors.title}</span>
            </div>
            
            <div className='col-lg-10 mx-auto mt-3'>
              <label>Author</label>
              <input
                className={`form-control ${formik.errors.author ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.author}
                onChange={formik.handleChange}
                name="author"
              />
              <span style={{ color: "red" }}>{formik.errors.author}</span>
            </div>
            
            <div className='col-lg-10 mx-auto mt-3'>
              <label>Genere</label>
              <input
                className={`form-control ${formik.errors.genere ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.genere}
                onChange={formik.handleChange}
                name="genere"
              />
              <span style={{ color: "red" }}>{formik.errors.genere}</span>
            </div>
            
            <div className='col-lg-10 mx-auto mt-3'>
              <label>Pages</label>
              <input
                className={`form-control ${formik.errors.pages ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.pages}
                onChange={formik.handleChange}
                name="pages"
              />
              <span style={{ color: "red" }}>{formik.errors.pages}</span>
            </div>
        
            <div className='col-lg-3 mt-3 mx-auto mb-3 text-center'>
              <input
                className='btn'
                type={'submit'}
                value='Submit'
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>
  </>
)
}
export default AddBook;