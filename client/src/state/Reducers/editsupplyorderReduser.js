const editsupplyorderReduser = (state = {
    editsupply: {
        amount_kg: 0,
        cultivation_id: 0,
        order_added_on_date: "0000-00-00",
        supply_on_date: "0000-00-00",
        supply_order_id: 0,
        supply_order_state: "null",
        thumbnail: "default",
        unit_price: 0,
        new_amount:0,
        new_status:"null"
    }
}, action) => {
    switch (action.type) {
        case "editSupply": return ({
            ...state,
            editsupply: action.payload
        })

        default: return (state)
    }
}

export default editsupplyorderReduser;