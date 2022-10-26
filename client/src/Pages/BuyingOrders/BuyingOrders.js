import React from 'react'
import './BuyingOrders.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'
import BuyingOrderListItem from '../../Components/BuyingOrderListItem/BuyingOrderListItem';
import BuyingOrderListItemRequest from '../../Components/BuyingOrderListItem/BuyingOrderListItemRequest';

function BuyingOrders() {

    const state = useSelector((state) => state)

    var title = <h1>These are your buying buying Orders</h1>
    if(state.setPage.page==="buyingorders"){
        title = <h1>These are the requests done by others to this supply order</h1>
        return (
            <div>
                {title}
                <div className='buyingordersContainer'>
                {   
                    state.buyingOrders.buyinglist.map((order) => {
                        return (
                            <BuyingOrderListItemRequest key={order.buyer_order_id}
                                id={order.buyer_order_id}
                                s_id={order.supply_order_id}
                                add_date={order.ordered_on_date_time.substr(0, 10)}
                                amount={order.amount}
                                state={order.buying_order_state}
                                time={order.ordered_on_date_time.substr(11, 8)}
                                page = {state.setPage.page}
                            />
                        )
                    })
                }
            </div></div>
        )
    }else{
        return (
            <div className='buyingordersContainer'>

                {   
                    state.buyingOrders.buyinglist.map((order) => {
                        return (
                            <BuyingOrderListItem key={order.buyer_order_id}
                                id={order.buyer_order_id}
                                s_id={order.supply_order_id}
                                add_date={order.ordered_on_date_time.substr(0, 10)}
                                amount={order.amount}
                                state={order.buying_order_state}
                                time={order.ordered_on_date_time.substr(11, 8)}
                                page = {state.setPage.page}
                                contact = {order.contact_no}
                                address = {order.address}
                                supply_on_date = {order.supply_on_date}
                                price = {order.unit_price}
                            />
                        )
                    })
                }
            </div>
        )
    }


    
}



export default BuyingOrders;