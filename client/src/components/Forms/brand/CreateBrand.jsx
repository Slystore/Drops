import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postBrand } from '../../../redux/brand/brandActions';
import "./formBrand.css"
import swal from 'sweetalert';

export default function FormBrand() {
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
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
      const x = await postBrand(input)

      swal("", "Marca Creada!", "success", {
        buttons: false
      });
      setInput({
        name: "",
      })
      history.push('/admin/brands')
      window.location.replace('')
    }
  }

  return (
    <div >
      <form onSubmit={e => handleSubmit(e)}>
        <div className='boxInputBrand'>
          <input className='inputProduct'
            name="name"
            type="text"
            onChange={onInputChange}
            value={input.name}
            placeholder='Nombre'
          />

          {errors.name && (
            <p className="errorText">{errors.name}</p>
          )}
        </div>
        <div className='boxBtnCreate'>
          <button className='btnCreate' type='submit'>  Crear</button>

        </div>
      </form >
    </div >

  )

}