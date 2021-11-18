import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { putOrder } from '../../../redux/orders/ordersAction';

const UpdateForm = (id) => {
    const dispatch = useDispatch()
    // const { id } = props.match.params;
    console.log(id.id.id,"updateorderid")
    const [input, setInput] = useState({
        shippingState: '',
    })

    function handleChange(e) {
        setInput({
            shippingState: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        await putOrder(id.id.id, input)

        swal("", "Orden Actualizada!", "success", {
            buttons: false,
        });
        setInput({
            shippingState: ''
        });
         window.location.replace("");
    }
    return (
        <div>
            <form onSubmit={e => { handleSubmit(e) }}>
                <p style={{ width: "auto" }} className="titleProduct">Estado de envio</p>
                <select style={{ marginLeft: 10 }} className='selectProduct' onChange={e => { handleChange(e) }}>
                    <option value="not initialized"> Inactivo</option>
                    <option value="initial">Inicial</option>
                    <option value="despachado">Despachado</option>
                    <option value="entregado">Entregado</option>
                </select>
                <div className="boxBtnCreate">
                    <button className='btnCreate' type='submit'> Actualizar</button>
                </div>
            </form>
        </div>
    );
};


export default UpdateForm;