const CultivationListReduser = (state = {
    cultivationlist: [{
        area_hectare:0,
        crop_id: 0,
        cultivation_id: 0,
        deadline: "",
        location_lati: "0",
        location_longi: "0",
        started_date: "",
        state: 0,
        genaral_name:""
    }]
}, action) => {
    switch (action.type) {
        case "editCultivationList": return ({
            ...state,
            cultivationlist: action.payload
        })
        default: return (state)
    }
}

export default CultivationListReduser;