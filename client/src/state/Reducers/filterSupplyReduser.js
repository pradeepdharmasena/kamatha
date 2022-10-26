const filterSupplyReduser = (
    state = {
        filterDistrict:"0",
        filterCrop:"0"
    }, action)=>{
    switch(action.type){
        case "setfilterdistrict" : return({
            ...state,
            filterDistrict:action.payload
        })

        case "setfiltercrop" : return({
            ...state,
            filterCrop:action.payload
        })

        default : return(state)
    }
}

export default filterSupplyReduser;