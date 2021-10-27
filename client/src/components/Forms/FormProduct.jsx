import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import swal from "sweetalert";
import { useStyles } from "./FormStyles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FormProduct = () => {
const dispatch= useDispatch();
  const clasess = useStyles();
  const history = useHistory();

//   const { categories } = useSelector((state) => state.productReducer);
//   const { brands } = useSelector((state) => state.productReducer);
//   const { sizes } = useSelector((state) => state.productReducer);

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    stock:{},
    stockAvailable: true,
    price: 0,
    image: "",
    description: "",
    status: [],
  });

  const validate = (form) => {

    let errors = {};

    if (!form.name) {
      errors.nombre = "Campo Obligatorio";

    } else if (!form.price || form.price === 0) {
      errors.precio = "Campo Obligatorio";

    } else if (!form.brand ) {
      errors.brand ="Campo Obligatorio"    

    } else if (!form.category) {
      errors.category = "Campo Obligatorio";
      
    } else if (!form.stock || Object.key(form.stock).length === 0 || Object.values(form.stock).length === 0) {
      errors.stock = "Campo Obligatorio";
      
    } else if (!form.description) {
      errors.description = "Campo Obligatorio";
    }
    return errors;
  };

  const handleChange = (e) => {
    var objErrors = validate({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(objErrors);
    console.log(errors);
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSelect = (e) => {
    setForm((form) => {
      return {
        ...form,
        Disponibilidad: e.target.value,
      };
    });
  };

  const handleSelectBrand = (e) => {
    setForm((form) => {
      return {
        ...form,
        brand: e.target.value
      };
    });
  };

  function cambiar(){
    var pdrs = document.getElementById('fileUpload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      swal("", "faltan campos por completar", "warning");

    } else {
    //   const x = await postMovie(form)
    // dispatch(postProduct(form));
      setForm({
    name: "",
    brand: "",
    category: "",
    stock:{},
    stockAvailable: true,
    price: 0,
    image: "",
    description: "",
    status: [],
      });

      swal("Pelicula Creada!", "", "success");
      history.push("/"); //hay que poner la ruta de router a donde reenvia
      // window.location.replace('')
    // }
  };
}

  return (
    <div className="container">
        <div className={clasess.caja}>

            <div className={clasess.imgLeft}>
            </div>

            <div className={clasess.caja2}>

                <div className={clasess.titleContainer}>
                    <h2 className={clasess.title}>Post movie</h2>
                </div>

                <form onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data' method='post'>

                    <div className={clasess.boxForm}>
                        <div className={clasess.miniBox}>
                            <input
                                className={clasess.input}
                                placeholder="Nombre"
                                type="text"
                                name="name"
                                onChange={handleChange}
                            />
                             {errors.nombre && (
                                   <p className={clasess.error}>{errors.nombre}</p>
                            )}
                        </div>

                        <div className={clasess.miniBox2}>
                            <input
                                className={clasess.input2}
                                placeholder="Precio"
                                type="number"
                                min="0"
                                name="price"
                                onChange={handleChange}
                            />
                            {errors.precio && (
                              <p className={clasess.error}>{errors.precio}</p>
                            )}
                        </div>

                        <div className={clasess.miniBox2}>
                            <input
                                className={clasess.input2}
                                placeholder="Marca"
                                type="text"
                                name="brand"
                                onChange={handleChange}
                            />
                            {errors.brand && (
                                  <p className={clasess.error}>{errors.brand}</p>
                            )}
                        </div>
                    </div>

                    <div className={clasess.boxForm}>
                        <div className={clasess.miniBox}>
                            <input
                                className={clasess.input}
                                placeholder="Categoria"
                                type="text"
                                name="category"
                                onChange={handleChange}
                            />
                            {errors.category && (
                                  <p className={clasess.error}>{errors.category}</p>
                            )}
                        </div>
                          </div>
                    <div className={clasess.boxForm2}>
                        <textarea
                            className={clasess.textarea}
                            name="description"
                            placeholder="Descripción"
                            onChange={handleChange}
                        />
                        {errors.description && (
                          <p className={clasess.error}>{errors.description}</p>
                        )}

                    </div>

                    {/* <div className={clasess.boxForm}>
                        <div className={clasess.miniBox3}>
                            <select onChange={(e) => handleSelectBrand(e)} className={clasess.select}>
                                <option value="">Marca</option>
                                  {
                                      brands && brands.map((brand) => {
                                          return (
                                            <option key={brand.id} value={brand.id}>
                                              {brand.name}
                                            </option>
                                          );
                                      })
                                  }
                            </select> 
                        </div>
                      
        
                       
                    </div> */}

                    <div className={clasess.boxForm}>
                        <div className={clasess.miniBox3}>
                            <select className={clasess.select} onChange={handleSelect}>
                                <option value=""> Disponibilidad</option>
                                <option value="true"> Disponible</option>
                                <option value="false"> Proximamente</option>
                            </select>
                        </div>
                    </div>
                        <div className={clasess.miniBox4}>
                            <div className={clasess.boxBtn}>
                                <button type="submit" className={clasess.btn}>crear</button>  
                            </div>
                            <div className={clasess.boxBtn}>
                                <Link to="/admin">
                                  <button className={clasess.btn}>Volver</button>
                                </Link>
                            </div>
                        </div>
            

                    {/* <div className={clasess.boxForm3}>
                       
                            <label htmlFor="file-upload" className={ clasess.subir}>
                                <CloudUploadIcon sx={{ fontSize: 20, marginBottom: 0.4 }}/> Subir Poster
                            </label>
                            <input
                                id="fileUpload"
                                name="fileUpload"
                                className={clasess.file}  
                                type="file"
                                name="poster"
                                onChange={cambiar}
                            />
                            <div id="info" className={clasess.info}></div>  
                       
                    </div> */}

                </form>
            </div>
        </div>

       
    
    </div>
  );
};
export default FormProduct;