
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import CreateBrand from "../../Forms/brand/CreateBrand"
import { SiNike } from "react-icons/si"
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import "./brandsButton.css"
import { FaSync } from "react-icons/fa"

const BrandsButtons = ({ searchbar, restore }) => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);



    return (
        <Grid className="navButton">

            <SiNike className="iconButtonNav" />

            <div>
                <input className="searchbarAdmin" id='restore' type='text' onChange={searchbar} placeholder="Buscar" />
                <button className="buttonResetAdmin" onClick={restore} > <FaSync /></button>

            </div>

            <Button style={{ backgroundColor: '#555' }} type='button' className="buttonButton" onClick={handleOpen} variant='contained'>Crear Marca</Button>
            <Modal open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >



                <Box className="boxModalBrands">
                    <Typography className="titleModal" id="modal-modal-title" variant="h6" component="h2">
                        Crear Marca
                    </Typography>
                    <div className="formModal">
                        <CreateBrand />

                    </div>

                </Box>


            </Modal>
        </Grid>



    )
}

export default BrandsButtons


