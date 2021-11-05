import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getCategoryById, postCategory } from '../../../redux/category/categoriesActions';


function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Nombre es requerido';
  }
  return errors;
};


export default function FormCategoryUpdate({ match }) {

  const id = match.params.id


  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //ejecutar action que traiga la category by id
    getCategoryById(id)
  }, [dispatch])

  const [errors, setErrors] = useState({});
  const { categoryById } = useSelector(state => state);

  const [input, setInput] = useState({
    // name: categoryById.name,
    // description: categoryById.description
    name: "hola",
    description: "chau"
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
      dispatch(postCategory(input))
      alert("Género creado correctamente");
      console.log(input)
      setInput({
        name: "",
      })
      //   history.push('/admin')
      //   window.location.replace('')
    }
  }

  return (
    <div >

      <h5>Modificar Categoría</h5>
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
          <label >Descripción: </label>
          <input
            name="description"
            type="text"
            onChange={onInputChange}
            value={input.description} />
        </div>
        <button type='submit'> Crear</button>
      </form>
    </div>
  )

}

{/* <Link to="/admin" ><button >Volver</button></Link> */ }
