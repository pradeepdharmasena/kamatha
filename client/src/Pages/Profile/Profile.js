import React from 'react'
import Axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCrators} from '../../state/actionCreators'
import BuyingOrders from '../BuyingOrders/BuyingOrders'
import SupplyOrders from '../SupplyOrders/SupplyOrders'
import NavBar from '../../Components/NavBar/NavBar'
import EditSupplyOrder from '../SupplyOrders/EditSupplyOrder'
import Cultivations from '../Cultivations/Cultivation'
import AddNewCultivation from '../Cultivations/AddNewCultivation'
import AddNewSupplyOrder from '../SupplyOrders/AddNewSupplyOrder'
import AddToCart from '../SupplyOrders/AddToCart'
import Wall from '../../res/images/wall.jpg'

function Profile(props){

    const state = useSelector((state)=>state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    const topBar = <div>
                        <h3>Welcome to the kamatha ....</h3>
                    </div>
    
        
            
        if(state.setPage.page  ==="mysupplyoders"){
            return(<div>
                <NavBar/>
                <SupplyOrders/>
            </div>)
        }else if(state.setPage.page ==="buyingorders"){
            return(<div>
                <NavBar/>
                <BuyingOrders/>
            </div>)
            
        }else if(state.setPage.page  ==="mybuyingoders"){
            return(<div>
                <NavBar/>
                <BuyingOrders/>
            </div>)
            
        }else if(state.setPage.page  ==="allsupplyoders"){
            return(<div>
                <NavBar/>
                <SupplyOrders/>
            </div>)
            
        }else if(state.setPage.page  ==="mycultivations"){
            return(<div>
                <NavBar/>
                <Cultivations/>
            </div>)
            
        }else if(state.setPage.page  ==="addnewcultivation"){
            return(<div>
                <NavBar/>
                <AddNewCultivation/>
            </div>)
            
        }else if(state.setPage.page  ==="addnewsupplyorder"){
            return(<div>
                <NavBar/>
                <AddNewSupplyOrder/>
            </div>)
            
        }else if(state.setPage.page ==="editsupplyorder"){
            return(<EditSupplyOrder/>)
        }
        else if(state.setPage.page ==="addtocart"){
            return(<AddToCart/>)
        }
        else{
            console.log(state)
            return(
                <div>
                    <NavBar/>
                    {topBar}
                    <img id= "wall" src={Wall} alt ="thumbnail"/>
                    

                </div>
            )
        }
}

export default Profile;