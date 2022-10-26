import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import setUserReducer from "./setUser";
import buyingListReducer from "./buyingListReduser";
import supplingListReducer from "./supplingListReducer";
import editbuyingorderReduser from "./editbuyingorderReduser";
import editsupplyorderReduser from "./editsupplyorderReduser";
import editnewsupplyorderReduser from "./editNewSupplyReducer";
import CultivationListReduser from "./CultivationListReduser";
import addNewCultivationReduser from "./AddNewCultivationReduser";
import addNewSupplyReduser from "./AddNewSupplyReduser";
import filterSupplyReduser from "./filterSupplyReduser";
import setErrorReduser from "./errorsReduser";
import addToCartReduser from "./AddToCartReduser";
import feedbackReduser from "./feedbackReduser";
import districtsReduser from "./DistrictsReduser";
import cropListReduser from "./CropListReduser";
import setStatusReduser from "./SetStatusReduser";

const reducer = combineReducers({
    setPage:pageReducer,
    setEditSupplyOrder:editsupplyorderReduser,
    setEditBuyingOrder:editbuyingorderReduser,
    editnewsupplyorder:editnewsupplyorderReduser,
    setUser:setUserReducer,
    buyingOrders:buyingListReducer,
    supplingOrders:supplingListReducer,
    cultivationList:CultivationListReduser,
    newCultivation: addNewCultivationReduser,
    newSupplyOrder: addNewSupplyReduser,
    filterSupply: filterSupplyReduser,
    error:setErrorReduser,
    addtocart:addToCartReduser,
    feedback:feedbackReduser,
    districts:districtsReduser,
    croplist:cropListReduser,
    setStatus:setStatusReduser

})

export default reducer;