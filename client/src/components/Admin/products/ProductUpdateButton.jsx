
import React, { useState } from "react"
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import UpdateProduct from "../../Forms/updateProduct/updateProduct"
import "./buttonUpdate.css"


const ProductUpdateButton = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <Grid >

            <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: "#55555550", color: "#555" }} >Editar</Button>
            <Modal open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="boxModal">
                    <Typography className="titleModal" id="modal-modal-title" variant="h6" component="h4">
                        Editar Usuario
                    </Typography>
                    <div className="formModal">
                        < UpdateProduct />
                    </div>

                </Box>


            </Modal>
        </Grid>



    )
}

export default ProductUpdateButton