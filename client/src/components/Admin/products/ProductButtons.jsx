import React, { useState } from "react";
import { Grid, Box, Button, Typography, Modal } from "@mui/material";
import "./productButton.css";
import FormProductCreate from "../../Forms/product/postProduct";
import { GiConverseShoe } from "react-icons/gi";
import { FaSync } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/products/productsAction";


const ProductButtons = ({ searchbar, info, restore }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

 

  return (
    <Grid className="navButton">
      <GiConverseShoe className="iconButtonNav" />
      <div> 
      <input
        className="searchbarAdmin"
        type="text"
        onChange={searchbar}
        placeholder="Buscar"
        id='hola'
      />
     
        <button className="buttonResetAdmin" onClick={restore}> <FaSync /></button>
        </div>
        <Button
        style={{ backgroundColor: "#555" }}
        className="buttonButton"
        type="button"
        onClick={handleOpen}
        variant="contained"
        >
        Crear Producto
        </Button>
      

      {info}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModal">
          <Typography
            className="titleModal"
            id="modal-modal-title"
            variant="h6"
            component="h4"
          >
            Crear Producto
          </Typography>
          <div className="formModal">
            <FormProductCreate />
          </div>
        </Box>
      </Modal>
    </Grid>
  );
};

export default ProductButtons;
