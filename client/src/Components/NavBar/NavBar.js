import React from 'react'
import './NavBar.css'
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function NavBar() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)


    return (
        <div id='navContainer'>
            <button
             className="navButton"
            onClick={()=>{
                ac.setPage("home")
            }}
            >Home</button>
            <button
                className="navButton"
                onClick={() => {
                    ac.setPage("mysupplyoders")
                    Axios.get('http://localhost:3001/mysupplyorderslist', { params: { user_id: state.setUser.user_id } })
                        .then((response) => {

                            if (response.data[0] !== []) {
                                ac.setSupplingList(response.data[0])

                            }
                        })
                }}>My Supply Orders</button>

            <button
                className="navButton"
                onClick={() => {
                    ac.setPage("mybuyingoders")

                    Axios.get('http://localhost:3001/mybuyingorderslist', { params: { user_id: state.setUser.user_id } })
                        .then((response) => {

                            if (response.data[0] !== []) {
                                ac.setBuyingList(response.data[0])

                            }
                        })


                }}>My Buying Orders</button>
            <button
                className="navButton"
                onClick={() => {

                    Axios.get('http://localhost:3001/allsupplyorders', { params: { user_id: state.setUser.user_id } })
                        .then((response) => {

                            if (response.data[0] !== []) {
                                ac.setSupplingList(response.data[0])

                            }
                        })
                    ac.setPage("allsupplyoders")



                }}> AllSupply Orders</button>

            <button
                className="navButton"
                onClick={() => {
                    ac.setPage("mycultivations")
                    Axios.get("http://localhost:3001/cultivationlist", { params: { user_id: state.setUser.user_id } })
                        .then((response) => {
                            ac.editCultivationlist(response.data[0]);
                            console.log("cultivation list in response", response.data[0])
                        })
                }}>My Cultivtions</button>

        </div>
    )
}

export default NavBar;