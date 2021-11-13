import React, { useState } from 'react';
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import { MdProductionQuantityLimits } from "react-icons/md"
import UpdateForm from '../../../Forms/orders/UpdateForm';
import "./buttonForm.css"

const ButtonFormUpdate = () => {


    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);




    return (
        <Grid className='navButton'>
            <MdProductionQuantityLimits className='iconButtonNav ' />
            <h5 className='titleNavOrden'>Detalle de Orden</h5>
            <Button style={{ backgroundColor: "#555" }} type='button' onClick={handleOpen} variant='contained'>Actualizar</Button>
            <Modal open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >



                <Box className="boxModalOrder">
                    <Typography className="titleOrder" id="modal-modal-title" variant="h6" component="h2">
                        Modificar Orden
                    </Typography>
                    <UpdateForm />

                </Box>


            </Modal>
        </Grid>

    );
};

export default ButtonFormUpdate;
