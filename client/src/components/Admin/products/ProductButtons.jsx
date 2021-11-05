
import React, { useState } from "react"
import CreateProducts from "../../Forms/CreateProduct"
import CreateCategory from "../../Forms/CreateCategory"
import CreateBrand from "../../Forms/CreateBrand"
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import "./productButton.css"

const ProductButtons = () => {

    const [Open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);


    // const [brand, setBrand] = useState(false);

    // const handleOpenBrand = () => setBrand(true);

    // const handleCloseBrand = () => setBrand(false);


    // const [category, setCategory] = useState(false);

    // const handleOpenCategory = () => setCategory(true);

    // const handleCloseCategory = () => setCategory(false);


    return (
        <Grid>
            <div className="buttonNav">
                <Button onClick={handleOpen} className="buttonModal">Crear Producto</Button>
                <Modal Open={Open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Crear Producto
                        </Typography>
                        <CreateProducts />

                    </Box>

                </Modal>
                {/* <Button onclick={handleOpenCategory} className="buttonModal">Crear Categoria</Button>
            <Button onclick={handleOpenBrand} className="buttonModal">Crear Marca</Button>



            <Modal brand={brand}
                onClose={handleCloseBrand}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Crear Marca
                    </Typography>
                    <CreateBrand />

                </Box>

            </Modal>
            <Modal category={category}
                onClose={handleCloseCategory}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Crear Categoria
                    </Typography>
                    <CreateCategory />

                </Box>

            </Modal> */}
            </div>
        </Grid>



    )
}

export default ProductButtons