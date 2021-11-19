import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles ({
  file: {
    width: 410,
    height: 33,
    display: "none",
  },
  subir: {
    marginLeft: 18,
    padding: "5px 10px",
    background: "#ea5103",
    color: "#fff",
    borderRadius: 5,
    float: "left",
    border: "0px solid #fff",
    "&:hover": {
      background: "#ea2203",
      cursor: "pointer",
    },
  },
  info: {
    width: 250,
    float: "left",
    fontSize: 15,
    position: "relative",
    marginLeft: 10,
    marginTop: 8,
    // border: 'thin dotted #0f0',
  },
  boxForm3: {
    width: 446,
    height: 45,
    marginTop: 10,
    marginBottom: 5,
    float: "left",
  },
});
