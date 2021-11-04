import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { editUsers, getToken, getUserId } from "../../redux/users/userActions";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState({
    // id: usersId.user ? usersId.user.id : "",
    name: "",
    surname: "",
    phone: "",
    adress: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = React.useState({
    userData: {},
    validate: "",
    userDataiD: usersId ? usersId.user : "",
  });

  useEffect(() => {
    console.log("estoy entrando al  useEffect");
    const x = getToken();
    console.log("this x ", x);
    if (x.msg) {
      return setUser({
        validate: "noAuth",
      });
    }
    if (x) {
      const userDecoded = jwtDecode(x);
      dispatch(getUserId(userDecoded.user.id ? userDecoded.user.id : ""));
      console.log("esta es mi data id");
      console.log("this", userDecoded);
      setUser({
        userData: userDecoded,
        validate: "auth",
      });
    }
  }, [dispatch]);
  console.log("estos son mis users", usersId ? usersId.user : "");
  const handleFormChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = async () => {
    const x = await editUsers(data, user.userData.user.id);
    if(x)return ''
  };
  console.log("this user", user);
  console.log("this data", usersId);
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
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Configuration" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            {usersId.user && (
              <div>
                <h1>
                  Hello{" "}
                  {usersId.user ? usersId.user.name : usersId.user.family_name}
                </h1>
                <div>
                  <img
                    src={usersId.user.picture ? usersId.user.picture : usersId.user.profileImg}
                    alt=""
                  />
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
          </TabPanel>
        </Box>
      )}
    </div>
  );
}
