import React from 'react'
import './Home.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'
import SignIn from '../../Components/SignIn/SignIn';
import Profile from '../Profile/Profile';
import SignUp from '../../Components/SignUp/SignUp';

function Home() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    let body = <div className='signContainer'>
        <h4>sign in user</h4>
        <div>
            <SignIn />
        </div>
        <button className="btn signup"
            onClick={() => {
                ac.setPage("signup")
                axios.get("http://localhost:3001/districts")
                    .then((response) => {
                        ac.setDistrictList(response.data)
                    })
            }}
        >Sign Up</button>
    </div>

    if (state.setUser.user_id !== 0) {
        body = <div>
            <Profile user_id={state.setUser.user_id} />
        </div>
    } else if (state.setPage.page === "signup") {
        body = <div className='signContainer'>
            <h4>Sign up User....</h4>
            <SignUp />
        </div>
    }


    return (body)
}

export default Home;