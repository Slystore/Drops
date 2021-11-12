import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands, getBrandsByName, PutBrands } from "../../../redux/brand/brandActions";
import BrandsButtons from "./BrandsButton";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import swal from "sweetalert";

const Brands = () => {
  const dispatch = useDispatch();
  const [, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cardsxPage] = useState(8);
  const [currPage] = useState(1);
  const lastProduct = currPage * cardsxPage;
  const firstProduct = lastProduct - cardsxPage;

  const brands = useSelector((state) => state.brandReducer.brands);

  useEffect(() => {
    dispatch(getBrands());
    setProductos(brands);
  }, [dispatch]);

  let data = brands.slice(firstProduct, lastProduct);

  const handleSearch = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    dispatch(getBrandsByName(busqueda));
  };

  const [input, setInput] = useState({
    id: "",
    name: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const seleccionarMarca = (elemento, caso) => {
    setInput({
      id: elemento.id,
    });
    if (caso === "Editar") {
      handleOpen();
    } else {
      handleClose();
    }
  };

  function onInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    await PutBrands(input);
    swal("", "Marca Actualizada!", "success", {
      buttons: false,
    });
    setInput({
      name: "",
    });
    window.location.replace("");
  }

  const restore = (e) => {
    e.preventDefault()
    dispatch(getBrands())
    document.getElementById('restore').value= ''
    setBusqueda('')

}

  return (
    <Grid style={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
      <BrandsButtons searchbar={handleSearch} restore={restore}/>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Actualizar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map((el) => {
                return (
                  <TableRow
                    key={el.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {el.id}
                    </TableCell>
                    <TableCell align="left">{el.name}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#555" }}
                        onClick={() => {
                          seleccionarMarca(el, "Editar");
                        }}
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <div>
                <p>no funciona</p>
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModalBrands">
          <Typography
            className="titleModal"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Editar Marca
          </Typography>
          <div className="formModal">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div style={{ marginBottom: 30 }} className="boxInputBrand">
                <p className="titleProduct">ID </p>
                <input
                  className="inputProduct"
                  name="id"
                  type="text"
                  onChange={onInputChange}
                  value={input.id}
                />
              </div>
              <div className="boxInputBrand">
                <p className="titleProduct">Nombre </p>

                <input
                  className="inputProduct"
                  name="name"
                  type="text"
                  onChange={onInputChange}
                  value={input.name}
                />
              </div>
              <div style={{ paddingTop: 20 }} className="boxBtnCreate">
                <button className="btnCreate" type="submit">
                  {" "}
                  Crear
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Brands;
