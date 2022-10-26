import React from 'react'
import axios from 'axios';
import "./SupplyOrders.css"
import SupplyOrderListItem from '../../Components/SupplyOrderListItem/SupplyOrderListItem';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function SupplyOrders() {

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    function btnFilter() {
        try {

            let dis = "0"
            let cr = '0'
            if (state.filterSupply.filterDistrict !== '') {
                dis = state.filterSupply.filterDistrict;
            };
            if (state.filterSupply.filterCrop !== '') {
                cr = state.filterSupply.filterCrop
            };

            axios.get("http://localhost:3001/filtersupplyorders", {
                params: {
                    district_id: dis,
                    crop_id: cr,
                    user_id: state.setUser.user_id
                }
            })
                .then((response) => {
                    console.log("parameters for filter=> dis, cr,state.setUser.user_id  ==> ", dis, cr, state.setUser.user_id)
                    if (response.data[0] !== undefined) {
                        console.log("filterd supply response", response.data)
                        ac.setSupplingList(response.data[0])
                    } else {
                        console.log("error occured")
                    }

                })

        } catch (err) {
            console.log("error occured in supply filtering....")
        }
    }

    let filter = <div></div>

    if(state.setPage.page ==="allsupplyoders"){
        filter =  <div>
        <select
            name="Districts"
            id="district"
            onChange={(event) => {
                ac.setfilterDistrict(event.target.value)

            }}
            onClick={btnFilter}
        >
            <option value="0">Sellect Disrict</option>
            {
                state.districts.districtList.map((dis) => {
                    return (<option key ={dis.disrict_id} value={dis.disrict_id}>{dis.disrict_name}</option>)
                })
            }
        </select>

        <select
            name="Crops"
            id="crops"
            onChange={(event) => {
                ac.setfilterCrop(event.target.value)
            }}
            onClick={btnFilter}
        >
            <option value="0">Sellect Crop</option>
            {
                state.croplist.croplist.map((crop) => {
                    return (<option key = {crop.crop_id}value={crop.crop_id}>{crop.genaral_name}</option>)
                })
            }
        </select>
        <button
            onClick={() => {
                btnFilter()
            }}>Filter</button>
    </div>
    }

    return (
        <div>
            {filter}
           
            <h1>supply Orders</h1>

            <div className=' supplyordersContainer'>
                {state.supplingOrders.supplinglist.map((order) => {

                    if (order.supply_order_id !== 0) {

                        return (<SupplyOrderListItem key={order.supply_order_id}
                            id={order.supply_order_id}
                            c_id={order.cultivation_id}
                            add_date={order.order_added_on_date.substr(0, 10)}
                            s_date={order.supply_on_date.substr(0, 10)}
                            amount={order.amount_kg}
                            status={order.supply_order_state}
                            price={order.unit_price}
                            thumb={order.thumbnail}
                            genaral_name ={order.genaral_name}
                        />)
                    }
                }
                )}

            </div>
        </div>
    )
}

export default SupplyOrders;