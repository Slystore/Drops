import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCategory } from '../../../redux/category/categoriesActions';
import swal from 'sweetalert';

export default function FormCategory() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: ""
  })
  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Nombre es requerido';
    }
    return errors;
  };

  function onInputChange(e) {
    var objErrors = validate({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(objErrors);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })

  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(input)
    if (Object.values(errors).length > 0 || input.name === "") {
      swal("Faltan datos por completar!");

    } else {
      const x = await postCategory(input)
      swal("Good job!", "Categoria Creada!", "success");

      setInput({
        name: "",
      })
      history.push('/admin/categories')
      window.location.replace('')
    }
  }

  return (
    <div >

      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <div className='boxInputProduct'>
            <p className='titleProduct'>Nombre </p>
            <input className='inputProduct'
              name="name"
              type="text"
              onChange={onInputChange}
              value={input.name} />

            {errors.name && (
              <p className="errorText">{errors.name}</p>
            )}
          </div>
          <div className='boxInpuProduct'>
            <p className='titleProduct'>Descripción </p>
            <input className='inputProduct'
              name="description"
              type="text"
              onChange={onInputChange}
              value={input.description} />
          </div>
        </div>
        <div className='boxBtnCreate'>
          <button className='btnCreate' type='submit'>Crear</button>
        </div>
      </form >
      {/* <Link to="/admin" ><button >Volver</button></Link> */}
    </div >

  )

}