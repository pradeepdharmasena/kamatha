 export const setId = (id) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setId",
                payload:id
            })
        }
    )
}

export const setEmail = (email) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setEmail",
                payload:email
            })
        }
    )
}

export const setPassword = (pw) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setPassword",
                payload:pw
            })
        }
    )
}

export const setPage = (page) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setPage",
                payload:page
            })
        }
    )
}

export const setSupplingList = (list) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"mysupplinglist",
                payload:list
            })
        }
    )
}

export const setBuyingList = (list) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"mybuyinglist",
                payload:list
            })
        }
    )
}

export const editSupplyOrder = (order) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"editSupply",
                payload:order
            })
        }
    )
}
export const editSupplyNewStatus = (status) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"editSupplyStatus",
                payload:status
            })
        }
    )
}

export const editSupplyAmount = (amount) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"editSupplyAmount",
                payload:amount
            })
        }
    )
}

export const editSupplySussessfull= (result) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"editSupplySussess",
                payload:result
            })
        }
    )
}

// filter supply order actions

export const setfilterDistrict= (dis) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setfilterdistrict",
                payload:dis
            })
        }
    )
}

export const setfilterCrop= (crop) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setfiltercrop",
                payload:crop
            })
        }
    )
}

export const editBuyingOrder = (order) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"editBuying",
                payload:order
            })
        }
    )
}

export const editCultivationlist = (list) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"editCultivationList",
                payload:list
            })
        }
    )
}

export const addNewSupplyAmount = (amount) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"addnewsupplyamount",
                payload:amount
            })
        }
    )
}

export const addNewSupplyPrice = (price) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"addnewsupplyprice",
                payload:price
            })
        }
    )
}

export const addNewSupplyCultivationid = (id) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"addnewsupplycultivationid",
                payload:id
            })
        }
    )
}

export const addNewSupplyDate = (date) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"addnewsupplydate",
                payload:date
            })
        }
    )
}


export const addNewCultivation = (culti) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"addnewcultivation",
                payload:culti                 
            })
        }
    )
}

export const setErrorId = (id) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"seterrorid",
                payload:id
            })
        }
    )
}

export const setErrorDiscription = (id) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"seterrordiscription",
                payload:id
            })
        }
    )
}

export const setaddtocartamount = (amount) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setaddtocartamount",
                payload:amount
            })
        }
    )
}

export const setaddtocartid = (id) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"setaddtocartid",
                payload:id
            })
        }
    )
}

export const setFeedback = (id) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"feedback_ok",
                payload:id
            })
        }
    )
}

export const setDistrictList = (list) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"districtslist",
                payload:list
            })
        }
    )
}

export const setCropList = (list) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"croplist",
                payload:list
            })
        }
    )
}

export const setSupplyOrderStats = (list) =>{
    return(
        (dispatch) =>{
            dispatch({
                type:"supplyordersstatus",
                payload:list
            })
        }
    )
}

