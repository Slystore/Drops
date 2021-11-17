import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Us.css';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '50vw',
//     height: '50vh',
//     // width: 600,
//     // height: 600,
//     bgcolor: 'background.paper',
//     borderRadius: 3,
//     boxShadow: 24,
//     p: 4,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   };

function Us() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="UsContainer" id="Nosotros">
            <h1>Todos somos DROPS</h1>
            <p>Somos el mejor local de street shoes de Argentina, con más de 50 modelos a escoger. <br></br>
            Como amantes de la cultura proveemos los mejores productos 100% originales que hacen match contigo.</p>
            <div className="hvr-grow-shadow">
                <Button className="BtnUsModal" style={{ backgroundColor: 'black', color: 'white', borderRadius: 10}} onClick={handleOpen}>Conócenos</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box className="Style">
                    <Typography id="modal-modal-title" className="TitleModal" >
                        <h1>Comunidad Drops</h1>
                    </Typography>
                    <div className="PortadaModal"></div>
                    <Typography id="modal-modal-description" className="TextModal" sx={{ mt: 2 }} variant="h6">
                        <p>Únete a nuestro grupo selecto de coleccionistas de calzado único como tu.
                        Diseños exclusivos al alcance de tu mano ya sea que vengas a nuestra tienda o para envío inmediato por paquetería.<br /><br />
                        No esperes más y entra en este fabuloso mundo <strong>DROPS</strong> donde toneladas de estilo esperan por tus pies.</p>
                    </Typography>
                    <Button className="ButtonModal" style={{ backgroundColor:'black',color: 'white', borderRadius: 10}} href="/catalogue">Ver Modelos</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default Us
