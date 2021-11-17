import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import {
  editUsers,
  getToken,
  getUserId,
  userDeleteWish,
  userWishListGet,
} from "../../redux/users/userActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Backdrop from "@mui/material/Backdrop";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import Product from "../Product/Product";
import "./profile.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";

import { getProducts } from "../../redux/products/productsAction";
import { getUserOrderId } from "../../redux/orders/ordersAction";
import { createReview } from "../../redux/reviews/reviewsActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {
  const dispatch = useDispatch();
  const usersId = useSelector((state) => state.usersReducer.userId);
  const wishList = useSelector((state) => state.usersReducer.wishList);
  const [value, setValue] = React.useState(0);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    // id: usersId.user ? usersId.user.id : "",
    name: "",
    surname: "",
    phone: "",
    adress: "",
  });
  const [comment, setComment] = useState({
    comment: "",
    rating: 0,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = React.useState({
    userData: {},
    validate: "",
    userDataiD: usersId ? usersId.user : "",
  });
  const gId = localStorage.getItem("gId");
  useEffect(() => {
    dispatch(getProducts());

    const x = getToken();

    if (x.msg) {
      return setUser({
        validate: "noAuth",
      });
    }
    if (x) {
      const userDecoded = jwtDecode(x);

      if (userDecoded.user) {
        dispatch(userWishListGet(userDecoded.user.id));
        dispatch(getUserOrderId(userDecoded.user.id));
        dispatch(getUserId(userDecoded.user.id ? userDecoded.user.id : ""));
      } else {
        const gId = localStorage.getItem("gId");
        dispatch(userWishListGet(gId));
        dispatch(getUserOrderId(gId));
        dispatch(getUserId(gId));
        setUser({
          userData: userDecoded,
          validate: "auth",
        });
      }
    }
  }, [dispatch]);
  let { userOrder } = useSelector((state) => state.ordersReducer);
  let { products } = useSelector((state) => state.productReducer);

  const handleFormChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = async (e) => {
    const x = await editUsers(data, user ? gId : user.userData.user.id);
    if (x) return "";
  };
  const handleOpenEdit = () => setEdit(true);
  const handleDeleteWish = async (id, productId) => {
    await userDeleteWish(id, productId);
    window.location.replace("");
  };
  const handleSumbitComment = async (e, user, comment, productId, rating) => {
    e.preventDefault();
   const x = await createReview(user, comment, productId, rating);
    if(x){
      setComment({
        comment:"",
        rating:0.        
      })
      swal({
        title:"Reseña dejada con exito!",
        text:"Tu comentario fue dejado con exito!",
        icon:"success",
        buttons:false
      })
    }
  };
  const commnentCapture = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  let wishFilt = wishList.map((el) => el.ProductId);
  let dataFiltered = products.filter((el) => wishFilt.includes(el.id));

  return (
    <div>
      {user.validate === "noAuth" ? (
        <div>
          No tienes permisos para ver esto
          <Redirect to="/login" />
        </div>
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 224,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Perfil" {...a11yProps(0)} />
            <Tab label="Configuracion" {...a11yProps(1)} />
            <Tab label=" Mis deseados" {...a11yProps(2)} />
            <Tab label="Mis compras" {...a11yProps(3)} />
            <a href="/" className="home">
              <Tab label="Home" {...a11yProps(4)} />
            </a>
          </Tabs>
          <TabPanel value={value} index={0}>
            {usersId.user && (
              <div>
                <div className="profile-content">
                  <h1>
                    Hello{" "}
                    {usersId.user
                      ? usersId.user.name
                      : usersId.user.family_name}
                  </h1>
                  <div className="img-profile">
                    <img
                      src={
                        usersId.user.picture
                          ? usersId.user.picture
                          : usersId.user.profileImg
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {usersId.user && (
              <div>
                <h1>Profile Configuration</h1>
                <div>
                  <span>
                    {usersId.user
                      ? usersId.user.name
                      : usersId.user.family_name}
                  </span>
                </div>
                <div>
                  <span>
                    {usersId.user
                      ? usersId.user.surname
                      : usersId.user.given_name}
                  </span>
                </div>
                <div>
                  <span>
                    {usersId.user ? usersId.user.mail : usersId.user.email}
                  </span>
                </div>
              </div>
            )}

            <Button onClick={handleOpen}>Edit proflie</Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>Name</label>
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="name"
                      />
                    </div>
                    <div>
                      <label>Surname</label>
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="surname"
                      />
                    </div>
                    <div>
                      <label>Phone</label>
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="phone"
                      />
                    </div>
                    <div>
                      <label>Adress</label>
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="adress"
                      />
                    </div>
                    <button type="submit">Send</button>
                  </form>
                </Box>
              </Fade>
            </Modal>
            <Button variant="text" onClick={handleOpenEdit}>
              Change password
            </Button>
            {edit && (
              <div>
                <Formik
                  initialValues={{
                    oldPassword: "",
                    password: "",
                    confirmPass: "",
                  }}
                  onSubmit={async (body, { resetForm }) => {
                    await editUsers(body, user.userData.user.id);
                    resetForm();
                  }}
                  validate={(values) => {
                    let error = {};
                    if (!values.oldPassword) {
                      error.oldPassword = "Complete this camp";
                    }
                    if (values.confirmPass !== values.password) {
                      error.confirmPass =
                        "La contraseña nueva no coincide con esta";
                    }
                    return error;
                  }}
                >
                  {({ errors }) => (
                    <Form>
                      <label>Actual password</label>
                      <Field
                        type="password"
                        name="oldPassword"
                        placeHolder="Actual password"
                      />
                      <ErrorMessage
                        name="oldPassword"
                        component={() => <div>{errors.oldPassword}</div>}
                      />
                      <label>New password</label>
                      <Field
                        type="password"
                        name="password"
                        placeHolder="New password"
                      />
                      <ErrorMessage
                        name="password"
                        component={() => <div></div>}
                      />
                      <label>Confirm new password</label>
                      <Field
                        type="password"
                        name="confirmPass"
                        placeHolder="Confirm new password"
                      />
                      <ErrorMessage
                        name="confirmPass"
                        component={() => <div>{errors.confirmPass}</div>}
                      />
                      <Button variant="text" type="submit">
                        Change
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div>
              <h1>WishList</h1>
              {wishList.length !== 0 ? (
                <div>
                  {dataFiltered &&
                    dataFiltered.map((el) => (
                      <div>
                        <button
                          onClick={() => {
                            handleDeleteWish(
                              usersId.user ? usersId.user.id : gId,
                              el.id
                            );
                          }}
                        >
                          X
                        </button>
                        <Product
                          key={el.id}
                          id={el.id}
                          name={el.name}
                          price={el.price}
                          Sizes={el.Sizes}
                          onSale={el.onSale}
                          discounts={el.discounts}
                          image={el.image}
                        />
                      </div>
                    ))}
                </div>
              ) : (
                <div>Todavia no agregaste nada :D</div>
              )}
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid
              style={{
                overflow: "scroll",
                overflowX: "hidden",
                height: "100vh",
                width: "150vh",
              }}
            >
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Orders ID</TableCell>
                      <TableCell align="left">User ID</TableCell>
                      <TableCell align="left">Estado de envio</TableCell>
                      <TableCell align="left">Estado de compra</TableCell>
                      <TableCell align="left">Status</TableCell>
                      <TableCell align="left">Rewiew</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userOrder ? (
                      userOrder.map((el) => (
                        <TableRow
                          key={el.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {el.id}
                          </TableCell>
                          <TableCell align="left">{el.UserId}</TableCell>
                          <TableCell align="left">{el.shippingState}</TableCell>
                          <TableCell align="left">{el.paymentState}</TableCell>
                          <TableCell align="left">{el.status}</TableCell>
                          {el.status === "completed" ? (
                            <TableCell align="left">
                              <button onClick={handleOpen}>
                                Deja una reseña
                              </button>
                              <StyledModal
                                aria-labelledby="unstyled-modal-title"
                                aria-describedby="unstyled-modal-description"
                                open={open}
                                onClose={handleClose}
                                BackdropComponent={Backdrop}
                              >
                                <Box sx={style}>
                                  <form
                                    onSubmit={(e) =>
                                      handleSumbitComment(
                                        e,
                                        usersId.user ? usersId.user.id : gId,
                                        comment,
                                        el.id
                                      )
                                    }
                                  >
                                    <label>Comentario</label>
                                    <input
                                      onChange={commnentCapture}
                                      name="comment"
                                      type="text"
                                    />
                                    <input
                                      type="number"
                                      name="rating"
                                      onChange={commnentCapture}
                                    />
                                    <button type="submit">Comentar</button>
                                  </form>
                                </Box>
                              </StyledModal>
                            </TableCell>
                          ) : (
                            <button disabled>Deja una reseña</button>
                          )}
                        </TableRow>
                      ))
                    ) : (
                      <div>Aun no tienes compras </div>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </TabPanel>
        </Box>
      )}
    </div>
  );
}
