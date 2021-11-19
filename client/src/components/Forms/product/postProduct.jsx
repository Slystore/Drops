import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { productForm } from "../../../redux/products/productsAction";
import { getBrands } from "../../../redux/brand/brandActions";
import { getCategories } from "../../../redux/category/categoriesActions";
import { getSizes } from "../../../redux/sizes/sizeActions";
import swal from "sweetalert";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./postProduct.css";

function validate(input) {
  let errors = {};
  if (!input.name) errors.name = "Es obligatorio ingresar un nombre";
  else if (!input.description)
    errors.description = "Es obligatorio describir el producto";
  else if (!input.price || input.price < 1)
    errors.price = "Es obligatorio ingresar un precio superior a 1";
  else if (!input.status)
    errors.status =
      "Es obligatorio determinar si el producto se encuentra en stock o no";
  else if (!input.brand)
    errors.brand = "Es obligatorio determinar una marca para el producto";
  else if (!input.categories || input.categories.length === 0)
    errors.categories =
      "Es obligatorio ingresar las categorias a las que pertenece el producto";
  else if (!input.stock || input.stock.length === 0)
    errors.stock = "Es obligatorio ingresar el stock del producto";
  return errors;
}

export default function FormProductCreate() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const { brands } = useSelector((state) => state.brandReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { sizes } = useSelector((state) => state.sizeReducer);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getSizes());
  }, [dispatch]);

  const [, setCategory] = useState("");
  const [talle, setTalle] = useState(0);
  const [talleUi, setTalleUi] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
    status: "",
    brandId: 0,
    categoryId: [],
    stock: [],
    image: "",
  });

  let prueba = !!(
    input.name &&
    input.description &&
    input.price &&
    input.status &&
    input.brandId &&
    input.categoryId &&
    input.stock.length > 0
  );

  const handleChangeForm = (e) => {
    if (e.target.name === "price") {
      setInput((state) => {
        return {
          ...state,
          price: Number(e.target.value),
        };
      });
      setErrors(
        validate({
          ...input,
          price: Number(e.target.value),
        })
      );
    } else {
      setInput((state) => {
        return {
          ...state,
          [e.target.name]: e.target.value,
        };
      });
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  };

  const handleChangeCategory = (e) => {
    e.preventDefault();

    let catFilter = categories.filter((cat) => cat.name === e.target.value);
    catFilter = catFilter[0].id;

    setInput({
      ...input,
      categoryId: [...input.categoryId, catFilter],
    });
    setCategory(e.target.value);
  };

  const agregarBrand = (e) => {
    setInput({
      ...input,
      brandId: parseInt(e.target.value),
    });
  };
  const agregarDieta = (e) => {
    setInput({
      ...input,
      status: e.target.value,
    });
  };
  const handleTalle = (e) => {
    setTalle(e.target.value);
  };

  const handleCantidad = (e) => {
    let talle = parseInt(e.target.value);
    setCantidad(talle);
  };

  const agregarStock = (e) => {
    e.preventDefault();
    let prueba = sizes.filter((e) => e.number === +talle);
    setTalleUi([...talleUi, [prueba[0].number, cantidad]]);
    setInput({
      ...input,
      stock: [...input.stock, [parseInt(prueba[0].id), parseInt(cantidad)]],
    });
    setCantidad(0);
  };

  const uploadImage = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    let file = e.target.files[0];
    document.getElementById('info').innerHTML = file.name;
    let reader = new FileReader();
    reader.onloadend = function () {
      Axios.post(`/products/addProductPhoto`, { image: reader.result })
        .then((res) => {
          setInput({ ...input, image: res.data.url });
        })
        .catch((res) => {
          console.log("boom", res);
        });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(productForm(input));
    setInput({
      name: "",
      image: "",
      description: "",
      price: 0,
      status: "",
      stock: [],
      brandId: 0,
      categoryId: [],
    });
    swal("", "Producto Creado!", "success");
    window.location.replace("");
  };

  const deleteCategory = (data) => {
    setInput({
      ...input,
      categoryId: input.categoryId.filter((category) => data !== category),
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="formProduct">
          <div className="firstBoxProduct">
            <div className="boxInputProduct">
              <p className="titleProduct"> Nombre </p>
              <input
                className="inputProduct"
                type={"text"}
                name="name"
                onChange={handleChangeForm}
                autoComplete="off"
              />
              {errors.name && <p className="errorText">{errors.name}</p>}
            </div>
            <div className="boxInputProductFile">
                <div className="BackGroundInputFile">
                    < CloudUploadIcon 
                        sx={{ 
                            color: "#fff", 
                            fontSize:26, 
                            position: "relative",
                            bottom:4,
                            left: 10,
                          }}
                            />  
                    <div className="boxInputProduct file-select" id="src-file1">
                      <input
                        className="InputFileUpload"
                        type="file"
                        id="image"
                        onChange={(e) => {
                          uploadImage(e);
                        }}
                      />
                </div>
                  <div id="info" className="info"></div>
                </div>
            </div>
            <div className="boxInputProduct">
              <p className="titleProduct"> Precio </p>
              <input
                min="0"
                max="999999"
                className="inputProduct"
                type={"number"}
                name="price"
                onChange={handleChangeForm}
              />
              {errors.price && <p className="errorText">{errors.price}</p>}
            </div>
            <div className="boxTextarea">
              <textarea
                className="textarea"
                name="description"
                onChange={handleChangeForm}
                placeholder="Describe el producto"
              />
              {errors.description && (
                <p className="errorText">{errors.description}</p>
              )}
            </div>
          </div>
          <div className="secondBoxProduct">
            <div className="boxSelectProduct">
              <select
                className="selectProduct"
                onChange={(e) => agregarBrand(e)}
              >
                <option> Marcas </option>
                {brands &&
                  brands.map((e, key) => (
                    <option key={key} value={e.id}>
                      {" "}
                      {e.name}{" "}
                    </option>
                  ))}
              </select>
            </div>

            <div className="boxSelectProduct">
              <select
                className="selectProduct"
                onChange={(e) => handleChangeCategory(e)}
              >
                <option> Categoría </option>
                {categories &&
                  categories.map((e, key) => (
                    <option key={key} value={e.name}>
                      {" "}
                      {e.name}{" "}
                    </option>
                  ))}
              </select>
            </div>

            <div className="boxSelectProduct">
              <select
                className="selectProduct"
                onChange={(e) => agregarDieta(e)}
              >
                <option> Estado </option>
                <option> disponible </option>
                <option> no disponible </option>
              </select>
            </div>

            <div className="boxSelectSizes">
              <select className="selectSize" onChange={(e) => handleTalle(e)}>
                <option> Tallas </option>
                {sizes &&
                  sizes.map((e, key) => (
                    <option key={key} value={e.number}>
                      {" "}
                      {e.number}{" "}
                    </option>
                  ))}
              </select>
            </div>

            <div className="boxSelectSizes2">
              <p className="titleStockProduct">Stock </p>
              <input
                min="0"
                max="1000"
                className="inputStock"
                type={"number"}
                name="stock"
                onChange={(e) => handleCantidad(e)}
              />
            </div>

            <div className="boxSelectProduct">
              <button disabled={  !cantidad  ? true : false } className="buttonStock" onClick={(e) => agregarStock(e)}>
                {" "}
                Agregar{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="AddTallesContainer">
          <label
            style={{
              fontSize: 12,
              color: "#00000050",
              paddingLeft: 5,
              position: "relative",
              top: -3,
            }}
          >
            Tallas agregadas
          </label>
          {talleUi &&
            talleUi.map((el, key) => {
              return (
                <div className="renderSizesProduct" key={key}>
                  <p className="stockNumber">
                    {" "}
                    Talla: {el[0]} - Cantidad: {el[1]}
                    <button
                      className="deleteStock"
                      onClick={() => deleteCategory(el)}
                    >
                      {" "}
                      X{" "}
                    </button>
                  </p>
                </div>
              );
            })}
        </div>

        <div className="boxBtnCreate">
          <button
            className="btnCreate"
            type="submit"
            id="submit"
            disabled={prueba ? false : true}
          >
            {" "}
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}
