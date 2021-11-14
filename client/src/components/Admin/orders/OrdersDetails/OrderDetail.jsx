import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersById } from '../../../../redux/orders/ordersAction';
import ButtonFormUpdate from '../updateOrders/ButtonForm';
import "./orderDetail.css"
const OrderDetail = (props) => {
    const dispatch = useDispatch()
    const { id } = props.match.params;



    const { orderId } = useSelector((state) => state.ordersReducer)



    useEffect(() => {
        dispatch(getOrdersById(id))
    }, [dispatch])





    return (
        <div style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <div>
                <ButtonFormUpdate />
            </div>

            <div className='detailOrderBox'>
                <div className='detailFirstBox'>
                    <h4>Datos </h4>
                    <ul className='detailList'>
                        <div className="detailListBox">
                            <li className="detailListItem">Numero de Orden: {orderId.id}</li>
                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Numero de Usuario: {orderId.UserId}</li>
                        </div>
                        {/* <div className="detailListBox">
                            <li className="detailListItem">Nombre de Usuario:{orderId.User.name}{orderId.User.surname}</li>
                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Nombre de Usuario:{orderId.User.mail}</li> 
                        </div>*/}
                        <div className="detailListBox">
                            <li className="detailListItem">Estado de envio: {orderId.shippingState}</li>

                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Estado de pago: {orderId.paymentState}</li>

                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Estado de pago: {orderId.shippingAddress}</li>

                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Zip de envio: {orderId.shippingZip}</li>

                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Ubicacion de envio: {orderId.shippingLocated}</li>

                        </div>

                        <div className="detailListBox">
                            <li className="detailListItem">Ciudad de envio: {orderId.shippingCity}</li>

                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Numero de pago: {orderId.payment_id}</li>

                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Estado Actual: {orderId.status}</li>

                        </div>
                        <div className="detailListBox">
                            <li className="detailListItem">Numero de comerciante: {orderId.merchant_order_id}</li>

                        </div>



                    </ul>
                </div>
                <div className='detailSecondBox'>
                    <div>
                        <h4>Productos</h4>
                    </div>
                    <div>
                        {
                            orderId.Products && orderId.Products.map(el => {
                                return (
                                    <div className="blockProduct" key={el.id}>
                                        <div className="blockFirstProduct">

                                            <ul className="blockListProduct">
                                                <div className="blockDetailProduct" >
                                                    <li className="detailListItem">Numero de producto: {el.id}</li>
                                                </div>
                                                <div className="blockDetailProduct">
                                                    <li className="detailListItem">Precio: {el.price}</li>
                                                </div>
                                                <div className="blockDetailProduct">
                                                    <li className="detailListItem">Cantidad: {el.OrderDetail.quantity}</li>
                                                </div>
                                                <div className="blockDetailProduct">
                                                    <li className="detailListItem">Identificador de talla: {el.OrderDetail.sizeId}</li>
                                                </div>
                                            </ul>
                                        </div>
                                        <div className="blockSecondProduct">
                                            <div >
                                                <p className='nameShoesOrder'>{el.name}</p>
                                                <img
                                                    className="ImgDetailOrder"
                                                    src={el.image}

                                                />
                                            </div>
                                        </div>



                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;