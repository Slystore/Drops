import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postBrand } from '../../../redux/brand/brandActions';

export default function FormBrand() {
  const dispatch = useDispatch();
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
      alert("Faltan datos a completar")
    } else {
      const x = await postBrand(input)

      alert("Género creado correctamente");
      setInput({
        name: "",
      })
      history.push('/admin/brands')
      window.location.replace('')
    }
  }

  return (
    <div >
      <form className='FormBox' onSubmit={e => handleSubmit(e)}>
        <div className='miniBoxForm'>
          <input className='input'
            name="name"
            type="text"
            onChange={onInputChange}
            value={input.name}
            placeholder='Nombre'
          />

          {errors.name && (
            <p className="danger">{errors.name}</p>
          )}
        </div>
        <button type='submit'   >
          Crear</button>
      </form >
    </div >

  )

}