import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles({
    container: {
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
    },
    bg: {
        position: 'fixed',
        left: 0,
        width: '100vw',
        height: '100vh',
        filter: 'blur(5px)'
    },
    imgLeft:{ 
        width: 400,
        overflow: 'hidden',
        float: 'left',
        
    },
    boxImg: {
        width: 520,
        height: '100%',
        marginLeft: -60,
        backgroundPosition: 'center',
    },
    caja: {
        display: 'flex',
        width: 1100,
        height: 600,
        backgroundColor: 'white',
        margin: '0 auto',
        borderRadius: 7,
        overflow: 'hidden',
        position: 'relative',
        top: '150px',
        boxShadow: '0 10px 10px rgb(0, 0, 0, .40)'
    },
    caja2: {
        width: 670,
        height: 570,
        marginLeft: 15,
        marginTop: 15,
    },
    titleContainer:{ 
        width: 670,
        height: 50,
        float: 'left',
    },
    title: {
        width: 200,
        margin: '0 auto',
        fontSize: 30,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 10
    },
    boxForm: {
        textAlign: 'center',
        width: 670,
        height: 40,
        marginTop: 10,
        marginBottom: 5,
        float: 'left',
    },
    boxForm2: {
        textAlign: 'center',
        width: 670,
        height: 110,
        marginTop: 10,
        marginBottom: 5,
        float: 'left',
    },
    boxForm3: {
        width: 446,
        height: 45,
        marginTop: 10,
        marginBottom: 5,
        float: 'left',
    },
    miniBox: {
        width: 335,
        height: 40,
        float: 'left',
    },
    miniBox2: {
        width: 167,
        height: 40,
        float: 'left',
    },
    miniBox3: {
        width: 223,
        height: 40,
        float: 'left',
    },
    miniBox4: {
        width: 223,
        height: 100,
        float: 'left',
    },
    input: {
        width: 300,
        outline: 'none',
        height: 30,
        paddingLeft: 5,
        marginBottom: 13,
    },
    input2: {
        width: 135,
        outline: 'none',
        height: 30,
        paddingLeft: 5,
        marginBottom: 13,
    },
    input3: {
        width: 635,
        outline: 'none',
        height: 30,
        paddingLeft: 5,
        marginBottom: 13,
    },
    boxtextarea: {
        height: 82
    },
    textarea: {
        width: 635,
        height: 100,
        marginBottom: 7,
        outline: 'none',
        resize: 'none'
    },
    select: {
        width: 185,
        height: 33,
        outline: 'none',
    },
    file: {
        width: 410,
        height: 33,
        display: 'none', 
    },
    subir:{
        marginLeft: 18,
        padding: '5px 10px',
        background: '#ea5103',
        color: '#fff',
        borderRadius: 5,
        float: 'left',
        border: '0px solid #fff',
        '&:hover': {
            background: "#ea2203",
            cursor: 'pointer',
        },
    },
    info:{
        width: 250,
        float: 'left',
        fontSize: 15,
        position: 'relative',
        marginLeft: 10,
        marginTop: 8,
        // border: 'thin dotted #0f0',
    },
    // disponible: {
    //     marginTop: 75,
    //     width: 250,
    //     height: 33,
    //     outline: 'none',
    //     marginBottom: 22


    // },
    // list: {

    // },
    render: {
        position: 'absolute',
        top: 153,
        right: 105,
        listStyle: 'none'
    },
    imgPaper: {
        height: 290,
        borderRadius: 10,
        position: 'relative',
        top: 15,
        left: 15,

    },
    boxBtn: {
        width: 223,
        height: 45,
        marginBottom: 12,
        // border: 'thin dotted #0f0'
    },
    btn: {
        width: 185,
        height: 40,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        textTransform: 'uppercase',
        fontWeight: '600',
        borderRadius: 3,
        transition: '0.3s ease-out',
        '&:hover': {
            background: "#ea5103",
            color: 'white',
        },
    },
    btnX: {
        marginLeft: 7,
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        fontSize: 13,
        '&:hover': {
            color: 'red',
        },

    },
    error: {
        color: 'red',
        fontSize: 14,
        fontWeight: '600',
        position: 'relative',
        bottom: 13


    }


})