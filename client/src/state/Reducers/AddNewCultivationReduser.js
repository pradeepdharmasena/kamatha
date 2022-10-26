const addNewCultivationReduser = (state = {
        area_hectare:0,
        crop_id: 0,
        deadline: "",
        started_date: "",
        district:""
}, action)=>{
    switch(action.type){
        case "addnewcultivation" : return({
            ...action.payload
        })
 
        default : return(state)
    }
}

export default addNewCultivationReduser;