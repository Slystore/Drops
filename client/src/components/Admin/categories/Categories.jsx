import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../redux/category/categoriesActions";
import { PutCategory } from "../../../redux/category/categoriesActions";
import CategoriesButtons from "./CategoriesButton";
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

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categoriesReducer.categories);

  const [input, setInput] = useState({
    id: "",
    name: "",
    description: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const seleccionarcategory = (elemento, caso) => {
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
    e.preventDefault();

    await PutCategory(input);
    swal("", "Categoria Actualizada!", "success", {
      buttons: false,
    });

    setInput({
      name: "",
    });
    window.location.replace("");
  }

  return (
    <Grid style={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
      <CategoriesButtons />
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
            {categories &&
              categories.map((el) => {
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
                        disabled={el.created === true}
                        variant="contained"
                        style={{ backgroundColor: "#555" }}
                        onClick={() => {
                          seleccionarcategory(el, "Editar");
                        }}
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModalCategories">
          <Typography
            className="titleModal"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Editar Categoria
          </Typography>
          <div className="formModal">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <div className="boxInputProduct">
                  <p className="titleProduct">ID </p>
                  <input
                    disabled
                    className="inputProduct"
                    name="id"
                    type="text"
                    onChange={onInputChange}
                    value={input.id}
                  />
                </div>
                <div className="boxInputProduct">
                  <p className="titleProduct">Nombre </p>
                  <input
                    className="inputProduct"
                    name="name"
                    type="text"
                    onChange={onInputChange}
                    value={input.name}
                  />
                </div>
                <div className="boxInpuProduct">
                  <p className="titleProduct">Descripción </p>
                  <input
                    className="inputProduct"
                    name="description"
                    type="text"
                    onChange={onInputChange}
                    value={input.description}
                  />
                </div>
              </div>
              <div className="boxBtnCreate">
                <button className="btnCreate" type="submit">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Categories;
