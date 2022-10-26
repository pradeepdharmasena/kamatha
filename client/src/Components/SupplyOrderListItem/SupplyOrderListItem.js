import React from 'react'
import Axios from 'axios'
import "./SupplyOrdersListItem.css"
import Image from "../../res/images/beans.jpg"
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function SupplyOrderListItem({ id, c_id, add_date, s_date, amount, status, price ,genaral_name}) {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    console.log(state)

    var btnset = <div>
        <button onClick={() => {
            ac.setPage("addtocart")
            ac.setaddtocartid(id)
        }}>Add to Cart</button>
    </div>

    if (state.setPage.page !== "allsupplyoders") {
        btnset = <div>
            <button onClick={() => {
                ac.editSupplyOrder({
                    supply_order_id: id,
                    cultivation_id: c_id,
                    amount_kg: amount,
                    order_added_on_date: add_date,
                    unit_price: price,
                    supply_on_date: s_date,
                    thumbnail: "default",
                    supply_order_state: status,

                })
                ac.editSupplyAmount(amount)
                ac.setPage("editsupplyorder")

            }}>Edit</button>
            <button onClick={() => {
                Axios.get('http://localhost:3001/buyingorderslist', { params: { supply_order_id: id } })
                    .then((response) => {
                        ac.setBuyingList(response.data[0])
                        ac.setPage("buyingorders")
                    }

                    )
            }}>requests</button>

        </div>
    }
    return (
        <div className='SOLI_card'>
            <h1>#{id}</h1>
            <img id="thumb_img" src={Image} alt="thumbnail" />
            <h4>Culti_#{c_id}</h4>
            <p>
                Crop:{genaral_name}<br/>
                Add On:{add_date}<br />
                will Supply:{s_date}<br />
                Amount:{amount}<br />
                State:{status}<br />
                Price:{price}<br />
            </p>

            {btnset}

        </div >
    )
}

export default SupplyOrderListItem