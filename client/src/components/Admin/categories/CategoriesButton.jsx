
import React, { useState } from "react"
import CreateCategory from "../../Forms/category/CreateCategory";
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import { MdOutlineCategory } from "react-icons/md"
import "./categoriesButton.css"

const CategoriesButtons = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <Grid className="navButton">
            <MdOutlineCategory className="iconButtonNav" />
            <Button style={{ backgroundColor: '#555' }} className="buttonButton" type='button' onClick={handleOpen} variant='contained'>Crear Categoria</Button>
            <Modal open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="boxModalCategories">
                    <Typography className="titleModal" id="modal-modal-title" variant="h6" component="h2">
                        Crear Categoria
                    </Typography>
                    <div className="formModal">
                        <CreateCategory />

                    </div>

                </Box>


            </Modal>
        </Grid>



    )
}

export default CategoriesButtons