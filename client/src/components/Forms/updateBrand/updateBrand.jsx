import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postBrand, getBrandById } from '../../../redux/brand/brandActions';


function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Nombre es requerido';
  }
  return errors;
};


export default function FormBrandUpdate({ match }) {

  const id = match.params.id

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //ejecutar action que traiga la category by id
    getBrandById(id)
  }, [dispatch])

  const { brandById } = useSelector(state => state);


  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    // name: brandById.name,
    name: "hola",
  })


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

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0 || input.name === "") {
      console.log("Faltan datos a completar")
    } else {
      dispatch(postBrand(input))
      console.log(input)
      alert("Género creado correctamente");
      setInput({
        name: "",
      })
      //   history.push('/admin')
      //   window.location.replace('')
    }
  }

  return (
    <div >

      <h5>Actualizar Marca</h5>
      <form onSubmit={e => handleSubmit(e)}>
        <div>

          <label >Nombre: </label>
          <input
            name="name"
            type="text"
            onChange={onInputChange}
            value={input.name} />

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


//   { <Link to="/admin" ><button >Volver</button></Link> }