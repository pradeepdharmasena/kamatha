import React from 'react'
import Axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function SignUp (){


        const st = useSelector((st) => st)
        const signUp = ()=>{

    
            Axios.post('http://localhost:3001/signup',{
                firstName:document.getElementById("first_name").value,
                lastName : document.getElementById("last_name").value,
                email:document.getElementById("email").value,
                contactNo:document.getElementById("contact").value,
                birthday:document.getElementById("birthday").value,
                district:document.getElementById("disrict").value,
                address:document.getElementById("address").value,
                gender:document.getElementById("gender").value,
                password:document.getElementById("password").value,

            }).then(()=>{
                console.log("inserting sucessfull")
            });
            
        }

        return(
            <div className = "inputContainer">
                <label>First Name:</label>
                <input 
                id = 'first_name'
                    type = "text"
                    
                />
                <label>Last Name:</label>
                <input 
                id = 'last_name'
                    type = "text"
                    />
                <label>Email:</label>
                <input 
                id = 'email'
                    type = "email"
                />
                <label>Contact No:</label>
                <input 
                id = 'contact'
                    type = "text"
                    />
                <label>BirthDay:</label>
                <input 
                id = 'birthday'
                type = "date"
                />
                <label>Address:</label>
                <input 
                id = 'address'
                type = "text"
                />
                <label>District:</label>
                <select
                name="Districts"
                id="disrict">  
             {
                 st.districts.districtList.map((dis)=>{
                    return(<option value={dis.disrict_id}>{dis.disrict_name}</option>)
                 })
             }

            </select>
                <label>Gender:</label>
                <select
                name="Gender"
                id="gender">  
    
                    <option value="male">Male</option>
                    <option value="female">Female</option>
        
            </select>
                <label>Password:</label>
                <input 
                id = 'password'
                type = "password"
                />
                <button onClick = {signUp}>Sign Up</button>
            </div>
        );
    }

export default SignUp;