import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function SignIn() {

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    const onBtnClick = () => {

        if (state.error.errorId === "1") {
            ac.setErrorId("0");
            ac.setErrorDiscription("null")
        }
        axios.get('http://localhost:3001/signin', {
            params: {
                email: state.setUser.email,
                password: state.setUser.password
            }
        })
            .then((response) => {
                if (response.data.user_id !== 0) {
                    ac.setId(response.data.user_id)
                    axios.get("http://localhost:3001/districts")
                        .then((response) => {
                            ac.setDistrictList(response.data)
                        })

                    axios.get("http://localhost:3001/crops")
                        .then((response) => {
                            ac.setCropList(response.data)
                        })

                    axios.get("http://localhost:3001/supplyordersstates")
                        .then((response) => {
                            ac.setSupplyOrderStats(response.data)
                        })



                } else {
                    ac.setErrorId("1");
                    ac.setErrorDiscription("login_failed")
                }
            })
    }

    let errormsg = <div>
        <h4>Enter your password and email...</h4>
    </div>

    if (state.error.errorId === "1") {
        errormsg = <div>
            Your email or pasword may invalid. please try again...
        </div>
    }

    return (
        <div>
            {errormsg}
            <input
                type="email"
                onChange={(event) => {
                    ac.setEmail(event.target.value)

                }}
                placeholder="Email"
            />
            <input
                type="password"
                onChange={(event) => {
                    ac.setPassword(event.target.value)
                }}
                placeholder="password"
            />
            <button onClick={onBtnClick}>Sign In</button>
        </div>)

}

export default SignIn;