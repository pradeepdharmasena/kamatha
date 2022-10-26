

const districtsReduser = (state = {
    districtList:[]
}  
, action)=>{
switch(action.type){
    case "districtslist" : return({
        ...state,
        districtList:action.payload
    })

    default : return(state)
}
}

export default districtsReduser;